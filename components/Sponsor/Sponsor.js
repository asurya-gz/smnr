import SponsorCard from "../utilities/SponsorCard";

export default function Sponsor() {
  return (
    <section className="container mx-auto px-5 mt-40">
      <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0">
        <div className="w-full xl:w-4/12 ">
          <p className="text-white text-lg font-sans w-full ml-4">Sponsor</p>
          <div className="grid grid-rows-2 grid-cols-2 gap-5 p-4">
            <SponsorCard image="./medpart/Badge SejutaCita.png"></SponsorCard>
            <SponsorCard image="./medpart/EVENT KAMPUS (KOSONGAN).png"></SponsorCard>
            <SponsorCard image="./medpart/LOGO LOMBA.IN.png"></SponsorCard>
            <SponsorCard image="./medpart/Logo LombaTerkini.png"></SponsorCard>
          </div>
        </div>
        <div className="w-full xl:w-4/12">
          <p className="text-white text-lg font-sans w-full ml-4">
            Media Partners
          </p>
          <div className="grid grid-rows-2 grid-cols-2 gap-5 p-4">
            <SponsorCard image="./medpart/Badge SejutaCita.png"></SponsorCard>
            <SponsorCard image="./medpart/EVENT KAMPUS (KOSONGAN).png"></SponsorCard>
            <SponsorCard image="./medpart/LOGO LOMBA.IN.png"></SponsorCard>
            <SponsorCard image="./medpart/Logo LombaTerkini.png"></SponsorCard>
          </div>
        </div>
        <div className="w-full xl:w-4/12">
          <p className="text-white text-lg font-sans w-full ml-4">
            Supported By
          </p>
          <div className="grid grid-rows-2 grid-cols-2 gap-5 p-4">
            <SponsorCard image="./medpart/Badge SejutaCita.png"></SponsorCard>
            <SponsorCard image="./medpart/EVENT KAMPUS (KOSONGAN).png"></SponsorCard>
            <SponsorCard image="./medpart/LOGO LOMBA.IN.png"></SponsorCard>
            <SponsorCard image="./medpart/Logo LombaTerkini.png"></SponsorCard>
          </div>
        </div>
      </div>
    </section>
  );
}