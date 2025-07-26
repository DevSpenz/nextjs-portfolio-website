import { navItems } from "@/data/nav-items";
import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import RecentProjects from "./component/RecentProjects";
import Testimonials from "./component/Testimonials";
import { FloatingNav } from "./component/ui/floating-navbar";

export default function Home() {
  return (
    <>
      <main className="bg-white dark:bg-black flex justify-center items-center py-5 sm:px-10 mx-auto">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero/>
          <About/>
          <RecentProjects/>
          <Testimonials/>
          <Contact/>
        </div>
      </main>
    </>
  );
}
