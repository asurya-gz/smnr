import CardCarousel from "./CardCarousel";
import classnames from "classname";
import { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      centerPadding: "60px",
      autoplay: true,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    function NextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div className="absolute bottom-0 right-1/3 md:-right-2/4 md:top-1/2">
          <div className={className} style={{}} onClick={onClick} />
        </div>
      );
    }

    function PrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div className=" absolute bottom-0 right-2/3 md:-right-2/4 md:top-1/2">
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        </div>
      );
    }

    return (
      <section className="container mx-auto w-full text-center mt-40">
        <div className="flex flex-col text-center md:w-11/12 p-4 justify-center  w-full space-y-8 order-1 md:order-2 sm:pt-0 lg:pt-40 xl:pt-52 place-self-center">
          <h2
            className={classnames(
              "text-2xl md:text-3xl font-bold font-sans text-lightblue-main inline-block text-center mx-auto w-[107px] h-[32px] relative"
            )}
          >
            Timeline
          </h2>
          <p className="text-white font-sans text-xl mx-auto w-[279px] h-[36px] relative">
            Alur waktu kegiatan pelaksanaan Seminar
          </p>
          <img src="/bgt.png" className="bgt items-center  mx-auto absolute w-full pt-40" />
        </div>

      </section>
    );
  }
}