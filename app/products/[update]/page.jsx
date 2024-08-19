// app/products/[update]/page.jsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page({ params }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  // console.log(params) // {update: '66c30fa18776d268ec0ce69b'}
  // console.log(params.update) // 66c30fa18776d268ec0ce69b
  const productId = params.update;

  useEffect(() => {
    getProductDetails();
  }, [productId]);

  const getProductDetails = async () => {
    let data = await fetch(`http://localhost:3000/api/products/${productId}`);
    data = await data.json();

    let result = data.result;
    if (data.success) {
      setName(result.name);
      setPrice(result.price);
      setCompany(result.company);
      setColor(result.color);
      setCategory(result.category);
    } else {
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    let data = await fetch(`http://localhost:3000/api/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify({name, price, company, color, category})
    });

    data = await data.json();

    if (data.success) {
      alert("Product has been updated.")
      setName("");
      setPrice("");
      setCompany("");
      setColor("");
      setCategory("");
      router.push("/products")
    } else alert("Product update failed.")
    
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-2xl font-semibold mb-4">
          Update Product Details
        </h1>
        <form onSubmit={updateProduct} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-1">
              Price
            </label>
            <input
              id="price"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">
              Company
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company name"
            />
          </div>
          <div>
            <label htmlFor="color" className="block text-sm font-medium mb-1">
              Color
            </label>
            <input
              id="color"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter color"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium mb-1"
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category"
            />
          </div>
          <div className="flex gap-2">
            <Link
              href="/products"
              className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-center rounded-md shadow-sm"
            >
              Back
            </Link>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
