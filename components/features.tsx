"use client"

import { Truck, Shield, Award, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Order over $100 get free shipping",
    },
    {
      icon: Shield,
      title: "100% Secure Payment",
      description: "Secured by international companies",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "Backed by our quality promise",
    },
    {
      icon: Zap,
      title: "Daily Offer",
      description: "Updated special offers daily",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <Icon className="w-8 h-8 mx-auto mb-4 text-black" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
