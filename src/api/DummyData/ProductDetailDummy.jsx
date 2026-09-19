import { Link, useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 99,
      category: "Electronics",
      description:
        "Premium wireless headphones with excellent sound quality and comfortable design.",
      image: "https://dummyjson.com/image/600x500",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 149,
      category: "Electronics",
      description:
        "A modern smartwatch with fitness tracking and smart notifications.",
      image: "https://dummyjson.com/image/600x500",
    },
    {
      id: 3,
      title: "Running Shoes",
      price: 79,
      category: "Fashion",
      description:
        "Lightweight running shoes designed for everyday comfort.",
      image: "https://dummyjson.com/image/600x500",
    },
    {
      id: 4,
      title: "Laptop Backpack",
      price: 49,
      category: "Accessories",
      description:
        "Durable laptop backpack with multiple compartments.",
      image: "https://dummyjson.com/image/600x500",
    },
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">

          <h1 className="text-4xl font-bold">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white"
          >
            Back to Products
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <Link
          to="/products"
          className="text-sm font-medium text-gray-600 hover:text-black"
        >
          ← Back to Products
        </Link>

        <div className="mt-8 grid gap-12 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">

          {/* Image */}
          <div className="flex items-center justify-center rounded-2xl bg-gray-50 p-8">

            <img
              src={product.image}
              alt={product.title}
              className="max-h-[500px] w-full object-contain"
            />

          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">

            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-900">
              {product.title}
            </h1>

            <p className="mt-6 text-3xl font-bold">
              ${product.price}
            </p>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <button
              className="mt-8 rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;