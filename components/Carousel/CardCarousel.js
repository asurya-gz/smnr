import Button from "../utilities/Button";
import classnames from "classname";

export default function CardCarousel({ className, title, description, image }) {
  return (
    <div className={classnames("flex flex-wrap w-full", className)}>
      <div className="relative w-full">
        <div className="w-11/12 ml-auto bg-center">
          <img alt="" src={image} />
        </div>
        <div className="absolute top-24 sm:top-40 md:top-24 lg:top-40 w-full sm:w-8/12 ">
          <div className="backdrop-filter backdrop-blur-lg box-glowing-bercahaya text-white firefox:bg-black firefox:bg-opacity-50 h-auto w-7/12 py-3 px-2 ml-10">
            <h2 className="font-bold text leading-relaxed">{title}</h2>
            <p className="text-xs leading-relaxed">{description}</p>
          </div>
          <div className="ml-10 mt-6 ">
            <Button href="#" variant="fill-yellow" className="rounded">
              Info Selengkapnya &gt;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
*/