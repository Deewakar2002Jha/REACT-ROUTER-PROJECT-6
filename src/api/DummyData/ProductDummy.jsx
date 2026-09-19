import React from 'react'

const ProductDummy = () => {
    const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 99,
      category: "Electronics",
      image: "https://dummyjson.com/image/400x300",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 149,
      category: "Electronics",
      image: "https://dummyjson.com/image/400x300",
    },
    {
      id: 3,
      title: "Running Shoes",
      price: 79,
      category: "Fashion",
      image: "https://dummyjson.com/image/400x300",
    },
    {
      id: 4,
      title: "Laptop Backpack",
      price: 49,
      category: "Accessories",
      image: "https://dummyjson.com/image/400x300",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="border-b bg-white">

        <div className="mx-auto max-w-7xl px-6 py-12">

          <p className="text-sm font-medium text-gray-500">
            OUR STORE
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            Products
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Explore our latest products and discover something
            perfect for you.
          </p>

        </div>

      </section>

      {/* Products */}
      <main className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </main>

    </div>
  )
}

export default ProductDummy