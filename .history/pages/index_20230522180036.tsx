import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <menu className="relative h-[200vh] bg-white">
        <LandingPage />
      </menu>
    </div>
  );
}
