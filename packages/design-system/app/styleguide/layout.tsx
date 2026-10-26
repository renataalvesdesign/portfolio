"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigation } from "./navigation"

export default function StyleguideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Fixed */}
      <aside className="fixed top-0 left-0 flex h-screen w-64 flex-col gap-8 overflow-y-auto border-r border-sidebar-border bg-sidebar p-6 text-sidebar-foreground">
        <div>
          <Link href="/styleguide" className="font-heading text-2xl font-semibold">
            Design System
          </Link>
        </div>

        <nav className="flex flex-col gap-8">
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 font-sans text-xs tracking-widest text-muted-foreground uppercase">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm transition-colors",
                        pathname === item.href
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content - offset by sidebar width */}
      <main className="ml-64 flex-1 overflow-auto">{children}</main>
    </div>
  )
}
