import Hero from "../components/Hero/Hero";
import NavBar from "../components/Navigation/NavBar";
import TentangAnforcom from "../components/TentangAnforcom/TentangAnforcom";
import Contact from "../components/Contact/Contact";
import SimpleSlider from "../components/Timeline/Timeline";
import Pmb from "../components/TentangAnforcom/Pmb";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-linear-end to-linear-start w-full">
      <NavBar />
      <Hero />
      <TentangAnforcom />
      <SimpleSlider />
      <Pmb />
      <Contact />
      <section className=" bg-black bg-opacity-25 text-center">
        <p className=" text-white font-sans text-lg pb-4 ">
          Copyright © Anforcom 2022
        </p>
      </section>
    </div>
  );
}