import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
// import Carousel from "./components/ui/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-20">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-slate-300 text-2xl font-bold">
          Demo (Static) CRUD
        </h2>
        <div className="flex gap-2 text-black">
          <Link
            href="/users"
            className="px-6 py-2 font-bold rounded-sm text-lg bg-green-500 active:scale-95"
          >
            GET
          </Link>
          <Link
            href="/addUsers"
            className="px-6 py-2 font-bold rounded-sm text-lg bg-yellow-400 active:scale-95"
          >
            POST
          </Link>
          <Link
            href="/users"
            className="px-6 py-2 font-bold rounded-sm text-lg bg-blue-600 active:scale-95"
          >
            PUT
          </Link>
          <Link
            href="/users"
            className="px-6 py-2 font-bold rounded-sm text-lg bg-red-500 active:scale-95"
          >
            DELETE
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-slate-300 text-2xl font-bold">
          Realtime (Dynamic) CRUD
        </h2>
        <div className="flex gap-2 text-black">
          <Link
            href="/products"
            className="px-6 py-2 font-bold rounded-sm text-lg bg-green-500 active:scale-95"
          >
            GET
          </Link>
          <Link
            href="/addProduct"
            className="px-6 py-2 font-bold rounded-sm text-lg bg-yellow-400 active:scale-95"
          >
            POST
          </Link>
          <Link
            href="/products"
            className="px-6 py-2 font-bold rounded-sm text-lg bg-blue-600 active:scale-95"
          >
            PUT
          </Link>
          <Link
            href="/products"
            className="px-6 py-2 font-bold rounded-sm text-lg bg-red-500 active:scale-95"
          >
            DELETE
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3">
      <h2 className="text-slate-300 text-2xl font-bold">Upload File to Public Folder or Database</h2>
     <div className="flex justify-center items-center gap-3">
     <Link
          href="/uploadNext"
          className="pl-2 pr-3 py-2 flex items-center font-semibold rounded-lg text-lg bg-black text-slate-200 active:scale-95 border border-white"
        >
          <TbBrandNextjs className="inline-block text-2xl mr-1"/>Public Folder
        </Link>
        <Link
          href="/uploadPosts"
          className="pl-1 pr-4 py-2 flex items-center font-semibold rounded-lg text-lg text-green-400 bg-black border border-green-400 active:scale-95"
        >
          <BiLogoMongodb className="inline-block text-3xl"/>Database
        </Link>
     </div>
      </div>
      {/* <Carousel /> */}
    </main>
  );
}
