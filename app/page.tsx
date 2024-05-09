"use client";
import Form from "./components/form";
import { useState } from "react";
import Result from "./components/result";

interface resultType {
  name: string;
  age: number;
  gender: string;
  country: string;
}
export default function Home() {
  const [result, setResult] = useState<resultType | null>(null);

  const handleFormSubmit = async (name: string) => {
    try {
      const [ageRes, genderRes, countryRes] = await Promise.all([
        fetch(`https://api.agify.io?name=${name}`).then((res) => res.json()),
        fetch(`https://api.genderize.io?name=${name}`).then((res) =>
          res.json()
        ),
        fetch(`https://api.nationalize.io?name=${name}`).then((res) =>
          res.json()
        ),
      ]);
      setResult({
        name,
        age: ageRes?.age || "Unknown",
        gender: genderRes?.gender || "Unknown",
        country: countryRes.country[0]?.country_id || "Unknown",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-4">
        Guess Age, Gender, and Country
      </h1>
      <Form onFormSubmit={handleFormSubmit} />
      {result && <Result data={result} />}
    </div>
  );
}
