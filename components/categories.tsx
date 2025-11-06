"use client"

export default function Categories() {
  const categories = [
    {
      title: "PRINTED T-SHIRTS",
      image: "/category-1.jpg",
    },
    {
      title: "MONOCHROME",
      image: "/category-2.jpg",
    },
    {
      title: "GRAPHIC HOODIES",
      image: "/category-3.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative aspect-video bg-gray-800 overflow-hidden flex items-center justify-center group cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition flex items-center justify-center">
                <h3 className="text-white font-bold text-center text-lg">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
