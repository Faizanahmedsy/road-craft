import React from "react";
import H2 from "../shared/h2";

export default function AboutSection() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <H2>About Us</H2>
      <div className="grid grid-cols-2">
        <div className="p-4 flex justify-center items-center">
          <img
            src="https://rawatassociates.in/wp-content/themes/ample-construction/images/office-img.png"
            alt=""
          />
        </div>
        <div className="p-4 space-y-3 font-medium">
          <div className="p-4 text-xl leading-8">
            Rawat associates is one of the leading infrastructure developers in
            india. Besides construction of Highways and Bridges the company is
            also engaged in Irrigation, Canals. We have worked over many states
            across the country, and completed prestigious projects for Central
            as well as State Governments.
          </div>
          <div className="p-4 text-xl leading-8 font-medium">
            We started in 1996 which got converted in to partnership firm in
            2014, Enlisted in AA Category contractors by U.P Irrigation
            Department. We have worked with all the major brands like NHAI,
            BSNL, PWD, U.P Irrigation Dept. Etc. We will continue to evolve,
            transform and grow and while we do, we hope to have your continued
            support and good wishes.
          </div>
        </div>
      </div>
    </div>
  );
}
