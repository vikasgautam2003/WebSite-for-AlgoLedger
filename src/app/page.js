import Hero from "@/components/Hero";
import SplitScroll from "@/components/SplitScroll";
import Features from "@/components/Features";
import Download from "@/components/Download";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SplitScroll />
      <Features />
      <Download />
    </>
  );
}
