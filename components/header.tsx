"use client"

import { ShoppingCart, Heart, User } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold tracking-wider">UNICLUB</div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-gray-600">
              HOME
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-600">
              PAGES
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-600">
              SHOP
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-600">
              T-SHIRTS
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-600">
              HOODIES
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-600">
              GET FAQ
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100">
              <User size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100">
              <Heart size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
