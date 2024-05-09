import React from "react";

const Result = ({ data }: any) => {
  const { name, age, gender, country } = data;
  return (
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-md">
      <p className="text-lg font-semibold mb-2">Guess Result:</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Country: {country}</p>
    </div>
  );
};

export default Result;
