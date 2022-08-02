export default function Contact() {
    return (
      <section className="mt-40 p-10 pt-10 pr-10 pb-20 bg-black bg-opacity-25">
        <div className="flex flex-wrap w-full justify-between pr-8 pl-8 space-y-20">
          <div className="flex flex-wrap md:w-3/12 w-full md:mt-20 mt-0">
            <ul className="space-y-5">
              <li>
                <h3 className=" text-2xl text-white font-sans font-medium">
                  Competitions
                </h3>
              </li>
              <li>
                <a className=" text-white font-sans text-lg hover:text-hover-nav">
                  Diponegoro UI/UX Competition
                </a>
              </li>
              <li>
                {" "}
                <a className=" text-white font-sans text-lg hover:text-hover-nav">
                  {" "}
                  Diponegoro Logic Competition
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap md:w-2/12 w-full space-y-5">
            <ul className="space-y-5">
              <li>
                <h3 className=" text-2xl text-white font-sans font-medium w-full">
                  Event
                </h3>
              </li>
              <li>
                <a className=" text-white font-sans text-lg hover:text-hover-nav">
                  Anforcom 2022 Seminar
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap md:w-2/12 w-full space-y-5">
            <ul className="space-y-5">
              <li>
                <h3 className=" text-2xl text-white font-sans font-medium">
                  Contact
                </h3>
              </li>
              <li>
                <a className=" text-white font-sans text-lg w-full hover:text-hover-nav">
                  (024) 71921302
                </a>
              </li>
            </ul>
          </div>
          <div className=" md:w-2/12 w-full">
            <ul className=" space-y-5">
              <li>
                <h3 className=" text-2xl text-white font-sans font-medium">
                  Social Media
                </h3>
              </li>
              <li>
                <a className=" text-white font-sans text-lg w-full hover:text-hover-nav">
                  Instagram
                </a>
              </li>
              <li>
                {" "}
                <a className=" text-white font-sans text-lg w-full hover:text-hover-nav">
                  {" "}
                  Facebook
                </a>
              </li>
              <li>
                <a className=" text-white font-sans text-lg w-full hover:text-hover-nav">
                  Telegram
                </a>
              </li>
              <li>
                <a className=" text-white font-sans text-lg w-full hover:text-hover-nav">
                  {" "}
                  Twitter
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
    );
  }