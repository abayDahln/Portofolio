'use client'

import Image from 'next/image'
import { useRef, useCallback, useEffect, useState } from 'react'
import { useGrainyCarousel } from '@/lib/use-grainy-carousel'

type AspectRatio = '16:9' | '4:3' | '1:1' | '3:4' | '9:16' | '5:4' | '4:5'
type ScrollMode = 'snap' | 'smooth'

interface GrainyImage {
  src: string
  alt?: string
}

interface GrainyCarouselProps {
  images: GrainyImage[]
  aspectRatio?: AspectRatio
  scrollMode?: ScrollMode
  grainIntensity?: number
  onImageChange?: (index: number) => void
  className?: string
}

export function GrainyCarousel({
  images,
  aspectRatio = '16:9',
  scrollMode = 'snap',
  grainIntensity = 0.3,
  onImageChange,
  className,
}: GrainyCarouselProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [webglOk, setWebglOk] = useState(true)

  const { setOffset } = useGrainyCarousel(canvasRef, {
    images,
    grainIntensity,
  })

  // Offset tracker used by drag logic
  const offsetRef = useRef(0)
  const currentIndexRef = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const updateIndex = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(images.length - 1, index))
    if (clamped !== currentIndexRef.current) {
      currentIndexRef.current = clamped
      setCurrentIndex(clamped)
      onImageChange?.(clamped)
    }
  }, [images.length, onImageChange])

  // Drag / inertia state
  const drag = useRef({
    active: false,
    startX: 0,
    startOffset: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    inertiaRaf: 0,
  })

  // Resize canvas to match container
  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const resize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    const ro = new ResizeObserver(resize)
    ro.observe(container)
    resize()

    return () => ro.disconnect()
  }, [])

  // Check WebGL2 support on mount
  useEffect(() => {
    const c = document.createElement('canvas')
    const gl = c.getContext('webgl2')
    if (!gl) setWebglOk(false)
  }, [])

  const pixelsPerUnit = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return 400
    return canvas.clientWidth / 2
  }, [])

  // ── Pointer handlers ─────────────────────────────────────────────
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const d = drag.current
    d.active = true
    d.startX = e.clientX
    d.lastX = e.clientX
    d.lastTime = performance.now()
    d.startOffset = offsetRef.current
    d.velocity = 0
    cancelAnimationFrame(d.inertiaRaf)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const d = drag.current
    if (!d.active) return

    const dx = e.clientX - d.lastX
    const now = performance.now()
    const dt = now - d.lastTime
    if (dt > 0) d.velocity = (dx / dt) * 16

    const ppu = pixelsPerUnit()
    const delta = dx / ppu
    offsetRef.current = d.startOffset + delta
    setOffset(offsetRef.current)

    d.lastX = e.clientX
    d.lastTime = now
  }, [pixelsPerUnit, setOffset])

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    const d = drag.current
    if (!d.active) return
    d.active = false

    const totalDx = e.clientX - d.startX

    // Click (no drag) → navigate to image under cursor
    if (Math.abs(totalDx) < 5) {
      const canvas = canvasRef.current
      if (canvas) {
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const progress = x / rect.width
        const idx = Math.round(progress * (images.length - 1))
        const clamped = Math.max(0, Math.min(images.length - 1, idx))
        const target = -clamped * 2
        offsetRef.current = target
        setOffset(target)
        updateIndex(clamped)
      }
      return
    }

    if (scrollMode === 'snap') {
      // Snap to nearest image
      const raw = -(offsetRef.current) / 2
      const idx = Math.round(raw)
      const clamped = Math.max(0, Math.min(images.length - 1, idx))
      const target = -clamped * 2
      offsetRef.current = target
      setOffset(target)
      updateIndex(clamped)
    } else {
      // Smooth / inertia
      const inert = () => {
        const d2 = drag.current
        d2.velocity *= 0.92
        if (Math.abs(d2.velocity) < 0.5) {
          // Snap to nearest when settled
          const raw2 = -(offsetRef.current) / 2
          const idx2 = Math.round(raw2)
          const clamped2 = Math.max(0, Math.min(images.length - 1, idx2))
          updateIndex(clamped2)
          return
        }
        const ppu = pixelsPerUnit()
        const step = d2.velocity / ppu * 0.3
        offsetRef.current += step
        setOffset(offsetRef.current)
        d2.inertiaRaf = requestAnimationFrame(inert)
      }
      d.inertiaRaf = requestAnimationFrame(inert)
    }
  }, [images.length, scrollMode, setOffset, updateIndex, pixelsPerUnit])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        const next = Math.max(0, currentIndexRef.current - 1)
        const target = -next * 2
        offsetRef.current = target
        setOffset(target)
        updateIndex(next)
      } else if (e.key === 'ArrowRight') {
        const next = Math.min(images.length - 1, currentIndexRef.current + 1)
        const target = -next * 2
        offsetRef.current = target
        setOffset(target)
        updateIndex(next)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length, setOffset, updateIndex])

  // ── Fallback: no WebGL2 ─────────────────────────────────────────
  if (!webglOk) {
    return (
      <div
        className={`relative overflow-hidden border border-border ${className ?? ''}`}
        style={{ aspectRatio: `${aspectRatio.replace(':', '/')}` }}
      >
        <div className="flex size-full">
          {images.map((img, i) => (
            <div key={i} className="relative min-w-full size-full">
              <Image
                src={img.src}
                alt={img.alt ?? ''}
                fill
                className="object-cover"
                sizes="80vw"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden border border-border cursor-grab active:cursor-grabbing select-none ${className ?? ''}`}
      style={{ aspectRatio: `${aspectRatio.replace(':', '/')}` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
    >
      <canvas ref={canvasRef} className="block size-full pointer-events-none" />
    </div>
  )
}
