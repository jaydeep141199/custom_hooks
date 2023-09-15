import React from "react";

import Confetti from "react-confetti";
import useEmail from "../Hooks/useEmail";

function Validation() {
  const [
    email,
    setEmail,
    errorMessage,
    validateEmail,
    color,
    width,
    height,
  ] =useEmail()

  return (
    <>
      <h3 className="font-bold text-2xl text-center pt-12">
        E-mail validation
      </h3>
      <section className="text-center  w-[450px] bg-gray-300 my-[100px] mx-[480px]">
        <div className=" flex flex-col py-5">
          <div className="flex flex-col">
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              value={email}
              className="border mx-12"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
            />
          </div>
          <div className="pt-5">
            <button onClick={validateEmail} className="bg-green-500 p-5 hover:bg-blue-500 hover:text-white">
              Validate
            </button>
          </div>
          {errorMessage && (
            <span style={{ color: `#${color}` }}>
              {errorMessage}
              {errorMessage === "E-mail address is valid" && (
                <Confetti width={width} height={height} />
              )}
            </span>
          )}
        </div>
      </section>
    </>
  );
}

export default Validation;
