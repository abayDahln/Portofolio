'use client'

import { useRef, useCallback, useEffect, useState } from 'react'
import { vertSrc, fragSrc } from './shaders'

interface GrainyImage {
  src: string
  alt?: string
}

interface UseGrainyCarouselOptions {
  images: GrainyImage[]
  grainIntensity?: number
}

function createShader(gl: WebGL2RenderingContext, type: number, src: string) {
  const shader = gl.createShader(type)!
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function createProgram(gl: WebGL2RenderingContext, vert: string, frag: string) {
  const vs = createShader(gl, gl.VERTEX_SHADER, vert)
  const fs = createShader(gl, gl.FRAGMENT_SHADER, frag)
  if (!vs || !fs) return null
  const prog = gl.createProgram()!
  gl.attachShader(prog, vs)
  gl.attachShader(prog, fs)
  gl.linkProgram(prog)
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(prog))
    return null
  }
  return prog
}

export function useGrainyCarousel(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  options: UseGrainyCarouselOptions,
) {
  const { images, grainIntensity = 0.3 } = options
  const glRef = useRef<WebGL2RenderingContext | null>(null)
  const progRef = useRef<WebGLProgram | null>(null)
  const vaoRef = useRef<WebGLVertexArrayObject | null>(null)
  const texturesRef = useRef<WebGLTexture[]>([])
  const loadedRef = useRef(false)

  // scrollOffset is the only shared state — component writes it, hook reads it
  const scrollOffsetRef = useRef(0)

  const rafRef = useRef(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl2', {
      alpha: false,
      antialias: true,
      premultipliedAlpha: false,
    })
    if (!gl) return
    glRef.current = gl

    const prog = createProgram(gl, vertSrc, fragSrc)
    if (!prog) return
    progRef.current = prog

    const quadVerts = new Float32Array([
      -1, -1,  0, 0,
       1, -1,  1, 0,
       1,  1,  1, 1,
      -1, -1,  0, 0,
       1,  1,  1, 1,
      -1,  1,  0, 1,
    ])

    const vao = gl.createVertexArray()
    gl.bindVertexArray(vao)
    vaoRef.current = vao

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, quadVerts, gl.STATIC_DRAW)

    const aPosition = gl.getAttribLocation(prog, 'aPosition')
    const aTexCoord = gl.getAttribLocation(prog, 'aTexCoord')
    gl.enableVertexAttribArray(aPosition)
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 16, 0)
    gl.enableVertexAttribArray(aTexCoord)
    gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, 16, 8)

    gl.bindVertexArray(null)

    setReady(true)

    // ── Cleanup on unmount ──────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafRef.current)
      gl.deleteProgram(prog)
      gl.deleteBuffer(buf)
      gl.deleteVertexArray(vao)
      texturesRef.current.forEach((t) => gl.deleteTexture(t))
      texturesRef.current = []
      glRef.current = null
      progRef.current = null
      vaoRef.current = null
      loadedRef.current = false
    }
  }, [canvasRef])

  // ── Load images as textures ──────────────────────────────────────
  useEffect(() => {
    if (!ready || images.length === 0) return
    const gl = glRef.current
    if (!gl) return

    texturesRef.current.forEach((t) => gl.deleteTexture(t))
    texturesRef.current = []
    let loaded = 0

    images.forEach((imgData, i) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        const tex = gl!.createTexture()
        gl!.bindTexture(gl!.TEXTURE_2D, tex)
        gl!.texImage2D(gl!.TEXTURE_2D, 0, gl!.RGBA, gl!.RGBA, gl!.UNSIGNED_BYTE, img)
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, gl!.LINEAR)
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, gl!.LINEAR)
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE)
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE)
        texturesRef.current[i] = tex!
        loaded++
        if (loaded === images.length) loadedRef.current = true
      }
      img.onerror = () => {
        loaded++
        if (loaded === images.length && texturesRef.current.length > 0) loadedRef.current = true
      }
      img.src = imgData.src
    })
  }, [ready, images])

  // ── Render loop ──────────────────────────────────────────────────
  const animate = useCallback(() => {
    const gl = glRef.current
    const prog = progRef.current
    const vao = vaoRef.current
    const canvas = canvasRef.current
    if (!gl || !prog || !vao || !canvas || !loadedRef.current) {
      rafRef.current = requestAnimationFrame(animate)
      return
    }

    const count = images.length
    if (count === 0 || texturesRef.current.length < count) {
      rafRef.current = requestAnimationFrame(animate)
      return
    }

    const w = canvas.width
    const h = canvas.height
    gl.viewport(0, 0, w, h)
    gl.clearColor(0, 0, 0, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)

    const offset = scrollOffsetRef.current

    // For each potentially visible image (including wrapped copies):
    // visibleRange = how many extra clones to render on each side
    const visibleRange = Math.ceil(1.5 / (count || 1)) + 1
    for (let i = -visibleRange; i <= visibleRange; i++) {
      for (let j = 0; j < count; j++) {
        const tex = texturesRef.current[j]
        if (!tex) continue

        const virtualIdx = j + i * count
        const imgOffset = virtualIdx * 2 + offset

        // Skip if way off screen
        if (imgOffset < -3 || imgOffset > 3) continue

        const dist = Math.abs(imgOffset)
        const dimming = Math.min(dist / 2, 1)

        gl.useProgram(prog)
        gl.bindVertexArray(vao)

        gl.uniform2f(gl.getUniformLocation(prog, 'uViewport'), w, h)
        gl.uniform1f(gl.getUniformLocation(prog, 'uOffset'), imgOffset)
        gl.uniform2f(gl.getUniformLocation(prog, 'uScale'), 1, 1)
        gl.uniform1i(gl.getUniformLocation(prog, 'uTexture'), 0)
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, tex)
        gl.uniform1f(gl.getUniformLocation(prog, 'uGrainIntensity'), grainIntensity)
        gl.uniform1f(gl.getUniformLocation(prog, 'uDimming'), dimming)

        gl.drawArrays(gl.TRIANGLES, 0, 6)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [canvasRef, images.length, grainIntensity])

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [animate])

  /** Called by the component to set the raw scroll offset (clip-space units) */
  const setOffset = useCallback((val: number) => {
    scrollOffsetRef.current = val
  }, [])

  return { ready, setOffset }
}
