import Image from "next/image";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Socials from "@/components/Socials";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Contact from "@/components/Contact";




export default function Home() {
  return (
    <main className="flex flex-col">
      {/* <Navbar /> */}
      <Hero />
      <Socials />
      <About />
      <Services />
      <Mission />
      <Contact />
      <Team />
      <Footer />
    </main>
  );
}
