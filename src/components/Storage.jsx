

import useStorage1 from "../Hooks/useStorage1";

  const Storage = () => {
const   [key,setKey,value,setValue,storageType,handelkeychange,handelvaluechange,saveTheData,handleStorageChange]=useStorage1()
    return (
      <>
        <h3 className="font-bold text-2xl text-center pt-12">
          Local & Session Storage
        </h3>
        <section className="text-center w-[450px] bg-gray-500 my-[100px] mx-[480px]">
          <div className="key flex flex-col py-5">
            <div className="pb-5">
              <label htmlFor="key">Key:</label>
              <input
                type="text"
                name="key"
                value={key}
                onChange={handelkeychange}
              />
            </div>
            <div>
              <label htmlFor="value">Value:</label>
              <input
                type="text"
                name="value"
                value={value}
                onChange={handelvaluechange}
              />
            </div>
          </div>
          <div className="radio flex justify-between">
            <div className="radio1">
              <input
                type="radio"
                name="storageType"
                id="local"
                value="local"
                checked={storageType === "local"}
                onChange={handleStorageChange}
              />
              <label htmlFor="local">Local Storage</label>
            </div>
            <div className="radio2">
              <input
                type="radio"
                name="storageType"
                id="session"
                value="session"
                checked={storageType === "session"}
                onChange={handleStorageChange}
              />
              <label htmlFor="session">Session Storage</label>
            </div>
          </div>
          <div className="save">
            <button onClick={saveTheData} className="bg-blue-500 px-5 py-2 mb-5">
              Save
            </button>
          </div>
        </section>
      </>
    );
  };
  
  export default Storage;
  