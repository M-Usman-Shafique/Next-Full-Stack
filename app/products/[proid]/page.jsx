// app/products/[proid]/page.jsx
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const getProductDetails = async (id) => {
  let data = await fetch(`http://localhost:3000/api/products/${id}`);
  return data = await data.json();
};

export default async function Product({ params }) {
//   console.log(params);
//   console.log(params.proid);
  const id = params.proid;
  let product = await getProductDetails(id);
//   console.log(product);
//   console.log(product.result);
  product = product.result;

  return (
    <div className="flex flex-col items-center p-8 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-slate-300">Product Details</h1>
      <ul className="relative bg-gray-800 rounded-lg px-6 py-5 w-full max-w-sm shadow-lg">
        <Link
          href={`/products/${product._id}/update`}
          className="absolute top-4 right-3 text-gray-200 opacity-40 hover:opacity-70 text-lg"
        >
          <FaEdit />
        </Link>
        <li className="mb-4">
          <span className="font-semibold">Name:</span> {product.name}
        </li>
        <li className="mb-4 text-slate-200">
          <span className="font-semibold">Price:</span> {product.price}
        </li>
        <li className="mb-4 text-slate-200">
          <span className="font-semibold">Color:</span> {product.color}
        </li>
        <li className="mb-4 text-slate-200">
          <span className="font-semibold">Company:</span> {product.company}
        </li>
        <li className="mb-4 text-slate-200">
          <span className="font-semibold">Category:</span> {product.category}
        </li>
      </ul>
      <Link
        href="/products"
        className="mt-8 text-blue-400 hover:underline text-lg font-medium"
      >
        Go Back
      </Link>
    </div>
  );
}
