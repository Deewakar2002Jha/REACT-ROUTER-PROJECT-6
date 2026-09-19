import React from 'react'

const ProductCard = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <img
        src={product.image}
        alt={product.title}
        className="h-56 w-full object-contain bg-gray-50 p-6"
      />

      <div className="p-5">

        <p className="mb-2 text-sm text-gray-500">
          {product.category}
        </p>

        <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        <div className="mt-4 flex items-center justify-between">

          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <Link
            to={`/products/${product.id}`}
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            View Details
          </Link>

        </div>

      </div>
    </div>
  )
}

export default ProductCard