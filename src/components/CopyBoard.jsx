import React from "react";
import useCopy from "../Hooks/useCopy";
const CopyBoard = () => {
  const [text,  handelchange, handelcopytext] =
  useCopy();
  return (
    <>
      <h3 className="font-bold text-2xl text-center pt-5">Copy Clipboard</h3>
      <section className="text-center w-[450px] bg-green-300 my-[30px] mx-[450px]">
        <div className="flex flex-col">
          <div className="mt-5">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              value={text}
              onChange={handelchange}
              className="border"
            />
          </div>{" "}
          <div className="m-2">
            <button
              className="bg-blue-500 py-5 hover:text-white"
              onClick={handelcopytext}
            >
              Copy text here
            </button>
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="border"
              onScroll={true}
            >
             
            </textarea>
          </div>
        </div>
      </section>
    </>
  );
};
export default CopyBoard;
