// src/pages/Products.jsx
import React from "react";

const products = [
  { id: 1, name: "Gaming Laptop", spec: "Ryzen 7 • 16GB • RTX", price: "₹89,999" },
  { id: 2, name: "Office Desktop PC", spec: "i5 • 8GB • 512GB SSD", price: "₹49,999" },
  { id: 3, name: "Student Laptop", spec: "i3 • 8GB • 256GB SSD", price: "₹34,999" },
  { id: 4, name: "Mechanical Keyboard", spec: "RGB • Blue Switches", price: "₹3,499" },
];

function Products() {
  return (
    <div className="px-6 py-10 md:py-16 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
        Our Products
      </h2>

      <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
        Handpicked systems and accessories suitable for study, work, gaming and business.
      </p>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.spec}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-blue-600 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
