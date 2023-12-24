import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="bg-cover w-full h-screen ">
        <div className="relative z-0 bg-gray lag:w-[100vw] lag:h-[110px] h-[75px] w-[100vw] overflow-hidden text-center text-base text-white font-audiowide">
          <ul
            className="m-0 hidden lag:flex justify-evenly items-center absolute top-[55px] left-[453px] w-[555px] h-[38px]"
            id="list"
            list="none"
          >
            <div className="flex tracking-[0.08em] items-center justify-center w-[137px] h-[38px] glow-text cursor-pointer">
              Workshops
            </div>
            <div className="flex  tracking-[0.08em] items-center justify-center w-[116px] h-[38px] glow-text cursor-pointer">
              Sponsors
            </div>
            <div className="tracking-[0.08em] flex items-center justify-center w-[94px] h-[38px] glow-text cursor-pointer">
              Gallery
            </div>
            <div className=" tracking-[0.08em] flex items-center justify-center w-[129px] h-[38px] glow-text cursor-pointer">
              Schedule
            </div>
          </ul>
          <div className=" lag:flex hidden lag:absolute   lag:top-[-9px] left-[calc(50%_-_336.45px)] w-[669.37px] h-[26px]">
            <img
              className="w-full h-full object-contain lag:flex hidden lag:absolute lag:left-[0px] lag:top-[0px] [transform:scale(1.077)]"
              alt=""
              src="/vector-line.svg" //uper white
            />

            <div className="absolute  top-[0px] left-[calc(50%_-_334.69px)] w-[669.37px] h-[26px] flex items-center justify-center"></div>
          </div>
          <div className="absolute top-[79px] left-[calc(50%_-_1015px)] w-[2030px] h-[26px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_1015px)]  w-[2030px] h-[26px]"
              alt=""
              src="/vector-line2.svg" //dark bottom
            />
            <div className="absolute  lag:flex hidden top-[0px] left-[calc(50%_-_1015px)]  w-[2030px] h-[26px]  items-center justify-center">
              <img
                className="w-[100%] h-[100%] object-contain absolute left-[0px] top-[0px] [transform:scale(1.7)]"
                alt=""
                src="/vector-line3.svg"
              />
            </div>
          </div>

          <div className="flex  justify-end items-center">
            <a href="/">
              <img
                className="absolute cursor-pointer lag:top-[3px] top-[5px] lag:left-[0px] left-[80px] lag:w-[98px]  lag:h-[70px] h-auto w-auto"
                alt=""
                src="/ees-logo-fcfbfc-1.svg"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[700px] h-[296px] "
            alt=""
            src="/vector 91.svg"
          />
          
        </div>
        <div className="flex items-center justify-center">
          <img
            className="fixed w-[700px] h-[1000px]"
            alt=""
            src="/vector 92 (1).svg"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
