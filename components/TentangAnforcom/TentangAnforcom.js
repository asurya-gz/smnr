import classnames from "classname";

export default function TentangAnforcom() {
  return (
    <div className="mt-40 xl:mt-10">
      <section className="container mx-auto w-full text-center  h-auto pb-10 px-7 pt-5">
        <h2
          className={classnames(
            "text-2xl lg:text-3xl font-bold font-sans text-lightblue-main inline-block text-center w-[88px] h-[32px] top-[718px]"
          )}
        >
          Benefit
        </h2>
        <p className="text-white text-lg font-sans top-[879px] pt-[11px] w-[279px] h-[36px] left-[56px] mx-auto">
          Seluruh peserta akan mendapatkan E-Sertifikat
        </p>

        <img src="/benefit.png" className="benefit items-center flex mx-auto pt-5 relative" />
      </section>
    </div>
  );
}