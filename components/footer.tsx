"use client"

import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-6">UNICLUB</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">About</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Journey
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Promotions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Refer a Friend
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">Help Center</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Product Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">© 2025 UNICLUB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
