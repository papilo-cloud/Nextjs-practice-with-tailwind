// import { Inter } from 'next/font/google'
import { Presales } from "@/components/Presales";
import { Roadmap } from "@/components/Roadmap";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-full bg-[#0F1212]">
      <div className="container m-auto w-[1296px]">
        <Roadmap />
        <Presales />
      </div>
    </main>
  )
}
