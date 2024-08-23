import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
// import Carousel from "./components/ui/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-20">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-slate-300 text-2xl font-bold">
          Demo (Static) CRUD
        </h2>
        <div className="flex gap-2">
          <Link
            href="/users"
            className="px-6 py-2 font-bold rounded-md text-lg bg-green-600 active:scale-95"
          >
            GET
          </Link>
          <Link
            href="/addUsers"
            className="px-6 py-2 font-bold rounded-md text-lg bg-yellow-500 active:scale-95"
          >
            POST
          </Link>
          <Link
            href="/users"
            className="px-6 py-2 font-bold rounded-md text-lg bg-blue-700 active:scale-95"
          >
            PUT
          </Link>
          <Link
            href="/users"
            className="px-6 py-2 font-bold rounded-md text-lg bg-red-600 active:scale-95"
          >
            DELETE
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-slate-300 text-2xl font-bold">
          Realtime (Dynamic) CRUD
        </h2>
        <div className="flex gap-2 ">
          <Link
            href="/products"
            className="px-6 py-2 font-bold rounded-md text-lg bg-green-600 active:scale-95"
          >
            GET
          </Link>
          <Link
            href="/addProduct"
            className="px-6 py-2 font-bold rounded-md text-lg bg-yellow-500 active:scale-95"
          >
            POST
          </Link>
          <Link
            href="/products"
            className="px-6 py-2 font-bold rounded-md text-lg bg-blue-700 active:scale-95"
          >
            PUT
          </Link>
          <Link
            href="/products"
            className="px-6 py-2 font-bold rounded-md text-lg bg-red-600 active:scale-95"
          >
            DELETE
          </Link>
        </div>
      </div>
      {/* <Carousel /> */}
      <div className="flex gap-3">
        <Link
          href="/uploadNext"
          className="pl-2 pr-6 py-2 flex items-center font-semibold text-lg bg-black text-slate-200 active:scale-95 border border-white rounded-lg"
        >
          <TbBrandNextjs className="inline-block text-2xl mr-1"/> Upload
        </Link>
        <Link
          href="/uploadMongo"
          className="pl-1 pr-6 py-2 flex items-center font-semibold rounded-lg text-lg text-green-400 bg-black border border-green-400 active:scale-95"
        >
          <BiLogoMongodb className="inline-block text-3xl"/> Upload
        </Link>
      </div>
    </main>
  );
}
