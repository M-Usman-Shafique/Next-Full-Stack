import Link from "next/link";
// import Carousel from "./components/ui/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-10">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-slate-300 text-2xl font-bold">Demo (Static) CRUD</h2>
        <div className="flex gap-2 ">
          <Link
            href="/users"
            className="px-2 py-2 font-bold rounded-md text-lg bg-green-600"
          >
            GET
          </Link>
          <Link
            href="/addUsers"
            className="px-2 py-2 font-bold rounded-md text-lg bg-yellow-500"
          >
            POST
          </Link>
          <Link
            href="/users"
            className="px-2 py-2 font-bold rounded-md text-lg bg-blue-700"
          >
            PUT
          </Link>
          <Link
            href="/users"
            className="px-2 py-2 font-bold rounded-md text-lg bg-red-600"
          >
            DELETE
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-slate-300 text-2xl font-bold">Realtime (Dynamic) CRUD</h2>
        <div className="flex gap-2 ">
          <Link
            href="/products"
            className="px-2 py-2 font-bold rounded-md text-lg bg-green-600"
          >
            GET
          </Link>
          <Link
            href="/addProduct"
            className="px-2 py-2 font-bold rounded-md text-lg bg-yellow-500"
          >
            POST
          </Link>
          <Link
            href="/"
            className="px-2 py-2 font-bold rounded-md text-lg bg-blue-700"
          >
            PUT
          </Link>
          <Link
            href="/"
            className="px-2 py-2 font-bold rounded-md text-lg bg-red-600"
          >
            DELETE
          </Link>
        </div>
      </div>
      {/* <Carousel /> */}
    </main>
  );
}
