import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import { Tab } from "@headlessui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <menu className="relative h-[200vh] bg-[#f7f7f7]">
        <LandingPage />
      </menu>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>

          <Tab.Group>
            <Tab.List className="flex justify-center">
              {/* {category.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nonwrap rounded-t-lg px-5 py-3 text-sm font-light outline-none md:px-6 md:py-4 md:text-base 
                     ${
                       selected
                         ? "borderGradient bg-[#35383C] text-white"
                         : "border-b-2 border-[#35383C] text-[#747474]"
                     }
                    `
                  }
                >
                  {category.title}
                </Tab>
              ))} */}
              <Tab.List>
                <Tab.Panels className="mx-auto max-w-fit pb-24 pt-10 sm:px-4">
                  {/* <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
                  <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
                  <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
                  <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel> */}
                </Tab.Panels>
              </Tab.List>
            </Tab.List>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
}
