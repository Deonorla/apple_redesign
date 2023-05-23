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
      <section className="realtive z-40 -mt-[100vh]">
        <h1 className="text-color text-4xl font-medium tracking-wide text-white md:text-5xl">
          New Promos
        </h1>
      </section>
    </div>
  );
}
