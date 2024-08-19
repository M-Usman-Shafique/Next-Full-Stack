// app/products/page.jsx
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import DeleteProduct from "../components/DeleteProduct";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products", {cache: "no-cache"});
  data = await data.json();

  if (data.success) return data.result;
  else return { success: false };
};

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen p-6">
      <h1 className="text-3xl text-center font-semibold mb-6">
        Product Details
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">Color</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Edit</th>
              <th className="py-2 text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
              >
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-2">{item.company}</td>
                <td className="px-4 py-2">{item.color}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-6 py-2">
                  <Link href={`/products/${item._id}`} className="opacity-50 text-lg hover:opacity-70">
                    <FaEdit />
                  </Link>
                </td>
                <td className="px-4 py-2">
                  <DeleteProduct id={item._id}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-10 text-lg">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
