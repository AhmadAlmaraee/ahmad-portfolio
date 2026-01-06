"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10"
      style={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(12px)",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          animate={{
            height: isScrolled ? "56px" : "64px",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-between"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="text-2xl font-bold" style={{ color: "#84994F" }}>
              Ahmad
            </Link>
          </motion.div>

          <div className="flex items-center gap-8">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group",
                    pathname === link.href ? "text-[#FFE797]" : "text-gray-300",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-[#FFE797] transition-all duration-300 ease-out",
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-300"
                style={{
                  backgroundColor: "#84994F",
                  color: "#000",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFE797"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#84994F"
                }}
              >
                Let's Talk
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
