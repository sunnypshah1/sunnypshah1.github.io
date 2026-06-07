"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const navItems = [
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-mono text-sm font-semibold uppercase tracking-[0.28em]">
            {siteConfig.name}
          </Link>
          <div className="hidden items-center gap-7 text-sm sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-muted-foreground transition hover:text-foreground",
                  pathname === item.href && "text-foreground",
                )}
              >
                {item.title}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border sm:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        {open && (
          <div className="grid gap-2 border-t border-border py-4 sm:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-2 py-2 text-sm text-muted-foreground",
                  pathname === item.href && "bg-secondary text-foreground",
                )}
              >
                {item.title}
              </Link>
            ))}
            <div className="px-2 pt-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
