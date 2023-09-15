import React from "react";

import Uselocation from "../Hooks/Uselocation";

const Location = () => {
  const { latitude, longitude, error } = Uselocation();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h3 className="font-bold text-2xl text-center pt-12">
        Local & session Storage
      </h3>
      <section className="text-center  w-[450px] bg-blue-500 text-white my-[100px] mx-[480px]">
        <div className="key flex flex-col py-5">
          Latitude: {latitude}
          <br />
          Longitude: {longitude}
        </div>
      </section>
    </>
  );
};

export default Location;
