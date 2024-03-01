import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <>
      <div
        className="h-screen flex flex-col justify-center items-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-900 opacity-75"></div>
        <div className="text-center z-10 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white">
            Building Tomorrow&apos;s Infrastructure, Today
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white">
            Transforming ideas into sustainable reality for a brighter future.
          </p>
          <a
            href="/contact"
            className="bg-white text-teal-700 py-3 px-8 rounded-full text-lg hover:bg-teal-100 transition duration-300 inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

//  {
//    /* <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */
//  }
//  <div className="h-screen flex flex-col justify-center items-center">
//    <div className="text-center z-10">
//      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
//        Building Tomorrow&apos;s Infrastructure, Today
//      </h1>
//      <p className="text-lg md:text-xl mb-8">
//        Transforming ideas into sustainable reality for a brighter future.
//      </p>
//      {/* <Button>Get in Touch</Button> */}
//    </div>
//  </div>;

//  <div className="grid grid-cols-2 h-[600px] my-32 px-32 gap-5">
//    <div className="h-full flex flex-col items-start">
//      <h1 className="text-4xl md:text-6xl pt-32 font-extrabold mb-4 leading-tight">
//        Building Tomorrow&apos;s Infrastructure, Today
//      </h1>
//      <p className="text-lg md:text-xl mb-8">
//        Transforming ideas into sustainable reality for a brighter future.
//      </p>
//    </div>
//    <div className="flex justify-end">
//      <img
//        src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
//        alt=""
//      />
//    </div>
//  </div>;
