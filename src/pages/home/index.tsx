import { Hero } from "../../components/home/sections/Hero";
import { About } from "../../components/home/sections/About";
import { Projects } from "../../components/home/sections/Projects";
import { Contact } from "../../components/home/sections/Contact";

export default function Home() {
    return (
        <div>
            <Hero />
            <div id="projects" className="absolute  w-full mt-[100vh] flex items-center justify-center z-10">
                <Projects />
            </div>
            <div id="about" className="absolute  w-full mt-[215vh] flex items-center justify-center z-10">
                <About />
            </div>
            <div id="contact" className="absolute  w-full mt-[314vh] flex items-center justify-center z-10">
                <Contact />
            </div>
        </div>


    )
}