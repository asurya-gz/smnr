import Button from "../utilities/Button";

export default function Hero() {
  return (
    <div className="relative section container w-full h-[800px] px-20 xl:px-32 pt-40  tracking-wider">
      <div className="w-full">
        <img alt="" src="/titik.svg" className="titik w-[135px]" />
      </div>
      <div className="mt-3">
        <h1 className="text-lightblue-main md:text-5xl text-3xl font-bold font-sans inline-block max-w-lg w-[300px] h-[76px] top-[130px] left-[77px]">
          Seminar
        </h1>
        <p className="text-white md:text-2xl text-lg mt-2 leading-relaxed w-[279px]">
          Cras dictum laoreet ornare. Etiam tempus tellus id  uam congue, vel interdum urna ultrices.
        </p>
        <div className="mt-10 ">
          <Button className="dftr items-end text-right" variant="fill-yellow" pill>
            Daftar Sekarang
          </Button>
        </div>
      </div>

      <div className="relative pb-10">
        <img
          alt=""
          src="/h1.png"
          className="sm:h-96 lg:h-[500px] max-h-[500px] top-[520px] opacity-70 pt-3 w-[324px] h-[292px]"
        />
      </div>
    </div>
  );
}

/*
*/