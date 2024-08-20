"use client"
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi2";

export default function DeleteProduct({ id }) {
  const router = useRouter();

    const handleDelete = async () => {
        let data = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "DELETE"});
            data = await data.json();
            
            if (data.success) {
                alert("Product has been deleted.")
                router.push("/products")
            } else {
                alert("Product not deleted.")
            }
    }
  return <button onClick={handleDelete} className="text-gray-200 opacity-60 hover:opacity-80 text-lg">
    <HiOutlineTrash />
  </button>
}