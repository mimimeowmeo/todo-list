import React, { useRef, useState } from "react";

const Add = ({ onSubmit }) => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    if (inputValue) {
      onSubmit(inputValue);
      setInputValue("");
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddClick(e);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 border rounded-lg bg-white shadow-sm">
      <input
        ref={inputRef}
        className="bg-sky-300 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Input Todo"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        maxLength={30}
      />
      <button
        className="px-4 py-2 bg-blue-500 
        text-white rounded hover:bg-blue-600 transition 
        disabled:bg-gray-300 disabled:cursor-not-allowed"
        onClick={handleAddClick}
        disabled={!inputValue}
      >
        Add Item
      </button>
    </div>
  );
};

export default Add;
