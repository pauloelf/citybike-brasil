import Link from "next/link"
import { Logo } from "../shared/Logo"
import { Badge } from "../ui/badge"

export function Header() {
  return (
    <header className="top-0 z-[99999] sticky flex max-sm:flex-col justify-between items-center gap-4 bg-background/70 shadow-xs backdrop-blur-sm px-8 py-2 border-b border-border">
      <Logo />
      <nav>
        <ul className="flex items-center gap-4 **:outline-none **:font-semibold **:hover:text-primary **:focus:text-primary **:text-muted-foreground **:transition-colors **:duration-300">
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
      <Badge className="bg-primary" pulse size="sm">
        Ao vivo
      </Badge>
    </header>
  )
}
