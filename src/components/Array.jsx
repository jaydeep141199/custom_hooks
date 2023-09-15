import React from 'react';
import useArray1 from '../Hooks/useArray1';
import useCounter from 'use-counter-hook/src/useCounter'

const Array=()=> {
  const{ count, increment} = useCounter(0);
const [inputValue, setInputValue,array, setArray,handleInputChange,handlePush,handlePop,handleReverse,handleReset,handleunshift,handleshift]=useArray1()
  return (
    <div className="p-4">
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <h1 className="text-2xl font-bold">Array Manipulation Example</h1>
      <div className="flex items-center mt-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a value"
          className="px-2 py-1 border border-gray-300 mr-2"
        />
        <button
          onClick={handlePush}
          className="px-4 py-2 bg-blue-500 text-white rounded ml-2"
        >
          Push
        </button>
        <button
          onClick={handlePop}
          className="px-4 py-2 bg-red-500 text-white rounded ml-2"
        >
          Pop
        </button>
        <button
          onClick={handleunshift}
          className="px-4 py-2 bg-green-500 text-white rounded ml-2"
        >
          Unshift
        </button><button
          onClick={handleshift}
          className="px-4 py-2 bg-orange-500 text-white rounded ml-2"
        >
          shift
        </button>
        <button
          onClick={handleReverse}
          className="px-4 py-2 bg-yellow-500 text-white rounded ml-2"
        >
          Reverse
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-500 text-white rounded ml-2"
        >
          Reset
        </button>
      </div>
      <div className="mt-4">
        <p>Resulting Array: {array.join(', ')}</p>
      </div>
    </div>
  );
}
export default Array
