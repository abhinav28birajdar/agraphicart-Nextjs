"use client";

// import { navItems } from "@/data";

import Hero from "./component/Hero";

import { navItems } from "@/data";
import { FloatingNav } from "@/app/component/ui/FloatingNavbar";
import  Grid1  from "./component/Grid1";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      <Grid1 />
      </div>
    </main>
  );
};

export default Home;
