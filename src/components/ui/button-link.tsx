import Link from "next/link"
import type { ReactNode } from "react"

export function ButtonLinkWithArrow({ children }: { children: ReactNode }) {
  return (
    <Link
      className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 focus:bg-primary/90 px-6 py-3 rounded-xl font-medium text-white transition-colors duration-300"
      href="/"
    >
      {children}
      <svg
        className="w-4 h-4 transition-transform group-focus:translate-x-1 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <title>Ícone seta para direita</title>
        <path
          d="M17 8l4 4m0 0l-4 4m4-4H3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </Link>
  )
}
