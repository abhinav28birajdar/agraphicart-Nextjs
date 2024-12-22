"use client";

import { navItems } from "@/data";
import Hero from "./component/Hero";
import { FloatingNav } from "@/app/component/ui/FloatingNavbar";
import  Grid1  from "./component/Grid1";
import MyWork from "./component/MyWork";
// import Clients from "./component/Clients";
import { Contact } from "lucide-react";
import CopyrightSection from './component/CopyrightSection'
const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      <Grid1 />
      {/* <Clients /> */}
      <MyWork />
      <Contact />
<CopyrightSection />
      </div>
    </main>
  );
};

export default Home;
