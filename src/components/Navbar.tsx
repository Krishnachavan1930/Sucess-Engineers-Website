"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Our Team", path: "/team" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-background border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/sucesslogo.jpg"
                alt="Sucess Engineers Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-xl sm:text-2xl text-primary">SUCESS ENGINEERS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out
                    ${isActive(item.path)
                      ? "text-red-600"
                      : "text-gray-500 hover:text-red-600"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6 transition-transform duration-200" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 transition-transform duration-200" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-2 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground font-medium tracking-wide">
              {"Shaping Streets with Strength & Style – Success Engineers Decorative Poles."}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 text-base font-medium transition-colors duration-200 ease-in-out
                  ${isActive(item.path)
                    ? "text-red-600"
                    : "text-gray-500 hover:text-red-600"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
