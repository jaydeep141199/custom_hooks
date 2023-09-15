import { useState } from "react";

const useArray1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([10, 12, 25, 65, 4]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePush = () => {
    if (inputValue !== "") {
      const newArray = [...array];
      newArray.push(inputValue);
      setArray(newArray);
      setInputValue("");
    } else {
      alert("please enter any value in inputbox");
    }
  };

  const handlePop = () => {
    const newArray = [...array];
    newArray.pop();
    setArray(newArray);
  };
  const handleunshift = () => {
    if (inputValue !== "") {
      const newArray = [...array];
      newArray.unshift(inputValue);
      setArray(newArray);
      setInputValue("");
    } else {
      alert("please enter any value in inputbox");
    }
  };
  const handleshift = () => {
    const newArray = [...array];
    newArray.shift();
    setArray(newArray);
  };

  const handleReverse = () => {
    setArray([...array].reverse());
  };

  const handleReset = () => {
    setArray([]);
  };
  return [
    inputValue,
    setInputValue,
    array,
    setArray,
    handleInputChange,
    handlePush,
    handlePop,
    handleReverse,
    handleReset,
    handleunshift,
    handleshift,
  ];
};
export default useArray1;
