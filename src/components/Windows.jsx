import React from "react";
import useWindows from "../Hooks/useWindows";

const Window = () => {
  const { width, height, resolution, isMobile, isLaptop } = useWindows()

  return (
    <>
      <h3 className="font-bold text-2xl text-center pt-24">Get window</h3>
      {/* <section className="text-center w-[450px] bg-orange-300  my-[90px] mx-[450px]">
    <div className="flex flex-col py-5"> */}
      <h3 className="font-bold">Window Information</h3>
      <p>
        Window: {width}px/{height}px
      </p>
      <p>Resolution: {resolution}</p>
      <p>
        Device: {isMobile ? "Mobile" : isLaptop ? "Laptop" : "Desktop"} device
      </p>
      {/* </div></section> */}
    </>
  );
};

export default Window;
