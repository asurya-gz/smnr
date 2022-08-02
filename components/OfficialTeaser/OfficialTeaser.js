import classnames from "classname";

export default function OfficialTeaser() {
  return (
    <>
      <section
        className="container mx-auto w-full text-center mt-40"
        id="officialTeaser"
      >
        <h2
          className={classnames(
            "text-2xl lg:text-3xl font-bold font-sans text-lightblue-main inline-block text-center w-[236px] h-[60px]"
          )}
        >
          Pertanyaan Umum
          FAQ
        </h2>
        <img src="/faq1.png" className="faq items-center  mx-auto" />
        <img src="/faq2.png" className="faq items-center  mx-auto" />
      </section>
    </>
  );
}