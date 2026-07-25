'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Heart, X } from 'lucide-react'

interface SlideData {
  src: string
}

interface CarouselProps {
  slides: SlideData[]
  onLike?: () => void
  aspectRatio?: string
}

function Slide({
  slide,
  isActive,
  onPointerDown,
  onPointerUp,
  onPointerMove,
}: {
  slide: SlideData
  isActive: boolean
  onPointerDown: (e: React.PointerEvent) => void
  onPointerUp: () => void
  onPointerMove?: (e: React.PointerEvent) => void
}) {
  return (
    <div className="h-[var(--slide-height)] mr-[var(--slide-spacing)] basis-[var(--slide-size)] flex-none flex min-w-0">
      <div
        className="size-full relative overflow-hidden border border-border cursor-pointer select-none touch-none"
        style={{
          transform: isActive ? 'scale(1)' : 'scale(0.9)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onPointerMove={onPointerMove}
      >
        <Image
          src={slide.src}
          alt=""
          fill
          className="object-cover pointer-events-none"
          sizes="50vw"
          draggable={false}
          style={{ opacity: isActive ? 1 : 0.5, transition: 'opacity 0.5s' }}
        />
      </div>
    </div>
  )
}

interface CarouselProps {
  slides: SlideData[]
  onLike?: () => void
  onUnlike?: () => void
  liked?: boolean
  aspectRatio?: string
}

export function Carousel({ slides, onLike, onUnlike, liked, aspectRatio }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogSrc, setDialogSrc] = useState('')
  const [heartAnim, setHeartAnim] = useState(false)
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isLongPress = useRef(false)
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pointerStart = useRef({ x: 0, y: 0 })

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList())
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    emblaApi.on('reInit', onInit).on('select', onSelect)
    return () => {
      emblaApi.off('reInit', onInit).off('select', onSelect)
    }
  }, [emblaApi, onInit, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  const handlePointerDown = useCallback((index: number, src: string, e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY }
    isLongPress.current = false
    longPressTimer.current = setTimeout(() => {
      isLongPress.current = true
      setDialogSrc(src)
      setDialogOpen(true)
      scrollTo(index)
    }, 500)
  }, [scrollTo])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    const dx = e.clientX - pointerStart.current.x
    const dy = e.clientY - pointerStart.current.y
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
        longPressTimer.current = null
      }
      isLongPress.current = false
    }
  }, [])

  const handlePointerUp = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
    if (isLongPress.current) {
      isLongPress.current = false
      return
    }
    if (clickTimer.current) {
      clearTimeout(clickTimer.current)
      clickTimer.current = null
      if (!liked) {
        onLike?.()
      }
      setHeartAnim(true)
      setTimeout(() => setHeartAnim(false), 1200)
    } else {
      clickTimer.current = setTimeout(() => {
        clickTimer.current = null
      }, 300)
    }
  }, [onLike, liked])

  useEffect(() => {
    if (!dialogOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDialogOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dialogOpen])

  return (
    <>
      <div className={`w-full ${aspectRatio ?? 'aspect-square'} [--slide-spacing:1rem] [--slide-size:100%] [--slide-height:100%]`}>
        <div className="relative size-full">
          <div className="overflow-hidden size-full" ref={emblaRef}>
            <div className="flex size-full touch-pan-y touch-pinch-zoom">
              {slides.map((slide, index) => (
                <Slide
                  key={index}
                  slide={slide}
                  isActive={index === selectedIndex}
                  onPointerDown={(e) => handlePointerDown(index, slide.src, e)}
                  onPointerUp={handlePointerUp}
                  onPointerMove={handlePointerMove}
                />
              ))}
            </div>
          </div>

          {heartAnim && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <Heart
                size={64}
                className="fill-white text-white drop-shadow-lg"
                style={{ animation: 'heartPop 1s ease-out forwards' }}
              />
            </div>
          )}

          {selectedIndex > 0 && (
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-border bg-background/80 text-foreground hover:bg-foreground hover:text-background transition-colors duration-150 z-10"
              title="Previous"
              onClick={scrollPrev}
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {selectedIndex + 1 < slides.length && (
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-border bg-background/80 text-foreground hover:bg-foreground hover:text-background transition-colors duration-150 z-10"
              title="Next"
              onClick={scrollNext}
            >
              <ChevronRight size={18} />
            </button>
          )}

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === selectedIndex ? 'bg-foreground' : 'bg-muted-foreground/40'
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {dialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-pointer"
          onClick={() => setDialogOpen(false)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:text-muted-foreground transition-colors z-10"
            onClick={() => setDialogOpen(false)}
          >
            <X size={24} />
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/3] mx-4">
            <Image
              src={dialogSrc}
              alt=""
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}
