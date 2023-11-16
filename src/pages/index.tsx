// import { Inter } from 'next/font/google'
import { Footer } from "@/components/Footer";
import { Presales } from "@/components/Presales";
import { Roadmap } from "@/components/Roadmap";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-full h-full bg-[#0F1212] m-0 p-0 overflow-hidden">
      <div className="relative m-auto w-[1296px] h-full">
        <Roadmap />
        <Presales />
        <Footer />
      </div>
    </main>
  )
}
