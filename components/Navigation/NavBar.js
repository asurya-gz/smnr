import Logo from "./Logo";
import Nav from "./Nav";
import classnames from "classname";

import { useState } from "react";
import Button from "../utilities/Button";

export default function NavBar() {
  const [offcanvas, setOffCanvas] = useState(false);
  return (
    <>
      <div className="absolute w-screen z-20 flex items-center py-6 px-4 bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm firefox:bg-opacity-50 ">
        <Logo />
        <div className="md:w-5/12 w-3/12 text-right hidden lg:block">
          <Nav dir="horizontal" />
        </div>
        <div className="w-3/12 lg:hidden text-right mr-4">
          <img
            alt=""
            src="/menu.svg"
            className="inline-block h-6"
            onClick={() => setOffCanvas(true)}
          />
        </div>
      </div>
      <div
        className={classnames(
          "fixed bg-black z-40 right-0 top-0 h-96 w-full p-10 lg:hidden transition-all",
          offcanvas ? "top-0" : "-top-full "
        )}
      >
        <img
          alt=""
          src="/x.svg"
          className="absolute top-8  right-8 w-10"
          onClick={() => setOffCanvas(false)}
        />
        <Logo />
        <div className="ml-10 mt-12">
          <Nav dir="vertical" />
          <Button variant="outline-blue" pill>
            Login
          </Button>
        </div>
      </div>
    </>
  );
}