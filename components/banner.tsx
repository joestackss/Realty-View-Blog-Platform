import React from "react";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between  px-10 py-5 mb-10">
      <div className="w-full flex justify-center flex-col items-center">
        <h1 className="text-5xl font-bold mb-2 ">RealtyView Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to the number 1 real estate blog
        </h2>
      </div>
    </div>
  );
}

export default Banner;
