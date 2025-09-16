"use client"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ScrollToTop() {
  const pathname = usePathname()

  // biome-ignore lint/correctness/useExhaustiveDependencies: explanation
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
