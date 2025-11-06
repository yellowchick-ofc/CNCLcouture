"use client"

export default function NewArrivals() {
  const products = [
    { name: "Seven Zero Five", price: "$40.00", badge: "New", image: "/product-1.jpg" },
    { name: "Seven Zero Five", price: "$40.00", badge: "Sale", image: "/product-2.jpg" },
    { name: "Seven Zero Five", price: "$40.00", badge: "Sale", image: "/product-3.jpg" },
    { name: "Seven Zero Five", price: "$40.00", badge: "Sale", image: "/product-4.jpg" },
    { name: "Seven Zero Five", price: "$40.00", badge: null, image: "/product-1.jpg" },
    { name: "Seven Zero Five", price: "$40.00", badge: null, image: "/product-2.jpg" },
    { name: "Seven Zero Five", price: "$40.00", badge: null, image: "/product-3.jpg" },
    { name: "Seven Zero Five", price: "$40.00", badge: null, image: "/product-4.jpg" },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-light tracking-wide mb-16">NEW ARRIVALS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative bg-gray-100 aspect-square overflow-hidden mb-4 hover:bg-gray-200 transition cursor-pointer">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-gray-400 text-white text-xs px-2 py-1">
                    {product.badge}
                  </span>
                )}
              </div>
              <h3 className="font-medium text-sm mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-black text-white px-8 py-3 font-medium text-sm hover:bg-gray-800 transition">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  )
}
