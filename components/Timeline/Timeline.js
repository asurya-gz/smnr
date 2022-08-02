import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="mx-auto text-center pt-16">
        <h2 className="text-2xl md:text-3xl font-bold font-sans text-lightblue-main inline-block text-center mx-auto">Timeline</h2>
        <p className="text-white font-sans text-xl mx-auto relative">
            Alur waktu kegiatan pelaksanaan UI/UX Competition
        </p>
        <Slider {...settings}>
          <div className="pt-5 pb-5 text-white relative">
            <img src="/seminar1.png" className="s1 items-center mx-auto w-[190px] h-[80px]" />
          </div>
          <div className="pt-5 pb-5 text-white relative">
            <img src="/seminar1.png" className="s1 items-center mx-auto w-[190px] h-[80px]" />
          </div>
        </Slider>
      </div>
    );
  }
}