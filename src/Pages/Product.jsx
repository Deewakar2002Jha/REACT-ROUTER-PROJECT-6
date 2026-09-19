import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
    const products = [
    {
      id: 101,
      name: "iPhone 17",
    },
    {
      id: 102,
      name: "Samsung Galaxy",
    },
    {
      id: 103,
      name: "Google Pixel",
    },
  ];
  return (
     <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <Link to={`/products/${product.id}`}>
            View Product
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Product