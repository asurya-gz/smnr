export default function Logo() {
    return (
      <div className="flex w-9/12 justify-center ml-0 sm:justify-start sm:ml-10 xl:ml-24">
        <div className="w-[75px] h-[31px] top-[22px] left-[23px]">
          <img alt="" src="/logo.png" />
        </div>
        <div className="uppercase text-xl font-sans font-bold text-white">
          Anforcom 2022
        </div>
      </div>
    );
  }