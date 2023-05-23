import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <menu className="relative h-[200vh] bg-[#f7f7f7]">
        <LandingPage />
      </menu>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
          New Promos
        </h1>
      </section>
    </div>
  );
}
