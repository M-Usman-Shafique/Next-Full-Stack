import Link from "next/link";
// import Carousel from "./components/ui/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex gap-2 ">
    <Link href="/users" className="px-2 py-2 font-bold rounded-md text-lg bg-green-600">GET</Link>
    <Link href="/addUsers" className="px-2 py-2 font-bold rounded-md text-lg bg-yellow-500">POST</Link>
    <Link href="/" className="px-2 py-2 font-bold rounded-md text-lg bg-blue-700">PUT</Link>
    <Link href="/" className="px-2 py-2 font-bold rounded-md text-lg bg-red-600">DELETE</Link>
    </div>
     {/* <Carousel /> */}
    </main>
  );
}
