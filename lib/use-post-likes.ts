'use client'

import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'post-likes'

function getLikedIds(): number[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function calculateBaseLikes(dateISO: string): number {
  const postDate = new Date(dateISO)
  const now = new Date()
  const msPerWeek = 7 * 24 * 60 * 60 * 1000
  const weeksSince = Math.floor((now.getTime() - postDate.getTime()) / msPerWeek)
  return Math.max(1, weeksSince)
}

export function usePostLikes(dateISO: string, postId: number) {
  const [liked, setLiked] = useState(false)
  const [baseLikes, setBaseLikes] = useState(0)

  useEffect(() => {
    setBaseLikes(calculateBaseLikes(dateISO))
    setLiked(getLikedIds().includes(postId))
  }, [dateISO, postId])

  const toggleLike = useCallback(() => {
    setLiked((prev) => {
      const newLiked = !prev
      const ids = getLikedIds()
      const updated = newLiked
        ? [...ids, postId]
        : ids.filter((id) => id !== postId)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return newLiked
    })
  }, [postId])

  const displayLikes = liked ? baseLikes + 1 : baseLikes

  return { likes: displayLikes, liked, toggleLike, baseLikes }
}
