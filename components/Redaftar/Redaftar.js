import Button from "../utilities/Button";

export default function Redaftar() {
  return (
    <section className="container mx-auto text-center mt-40 h-auto">
      <div className="flex w-full text-center justify-center gap-3">
        <img alt="" src="/logogede.png" className=" h-10"></img>
        <h2 className="text-white uppercase font-sans font-bold text-2xl lg:text-5xl">
          Anforcom 2022
        </h2>
      </div>
      <p className="text-white text-sm lg:text-xl font-sans  w-full mt-4">
        Next Level Millenium :
      </p>
      <p className="text-white text-sm lg:text-xl font-sans  w-full mt-4">
        {" "}
        Shaping The Future till Beyond The Limit
      </p>

      <div className="flex mt-10 justify-center gap-3">
        <div className="">
          {" "}
          <Button className="" variant="fill-yellow" pill>
            Daftar Sekarang
          </Button>
        </div>

        <div className="">
          <Button
            className=""
            variant="outline-yellow"
            pill
            href="#officialTeaser"
          >
            Teaser
          </Button>
        </div>
      </div>
    </section>
  );
}