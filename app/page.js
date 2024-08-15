import Link from "next/link";
import Carousel from "./components/ui/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex gap-2 ">
    <Link href="/users" className="bg-green-600">GET</Link>
    <Link href="/addUsers" className="bg-yellow-500">POST</Link>
    <Link href="/" className="bg-blue-700">PUT</Link>
    <Link href="/" className="bg-red-600">DELETE</Link>
    </div>
     <Carousel />
    </main>
  );
}
