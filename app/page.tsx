import TopNav from "@/app/components/TopNav";
import HeroSection from "@/app/components/HeroSection";
import Speciallized from "@/app/components/Speciallized";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact"; 
import Gradient from "@/app/components/Gradient";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Gradient />
      <TopNav />
      <HeroSection />
      <Speciallized />
      <Projects />
      <Contact />
    </div>
  );
}
