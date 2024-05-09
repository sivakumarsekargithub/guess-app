"use client";
import React, { useState } from "react";

const Form = ({ onFormSubmit }: any) => {
  const [name, setName] = useState<string>("");
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onFormSubmit(name);
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
      />
      <button
        type="submit"
        className="block w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Guess
      </button>
    </form>
  );
};

export default Form;
