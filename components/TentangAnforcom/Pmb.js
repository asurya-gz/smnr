import classnames from "classname";

export default function Pmb() {
  return (
    <div className="mt-40 xl:mt-10">
      <section className="container mx-auto w-full text-center  h-auto pb-10 px-7 pt-5">
        <h2
          className={classnames(
            "text-2xl lg:text-3xl font-bold font-sans text-lightblue-main inline-block text-center w-[88px] h-[32px] top-[718px]"
          )}
        >
          Speaker
        </h2>
        <p className="text-white text-lg font-sans top-[879px] pt-[11px] w-[279px] h-[36px] left-[56px] mx-auto pb-16">
          Pembicara pada seminar Anforcom 2022 merupakan para expert yang saat ini bekerja di beberapa Unicorn
        </p>

        <img src="/pmb.png" className="benefit items-center flex mx-auto pt-5" />
      </section>
    </div>
  );
}