"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [formData, setFormData] = useState({
    whom: "",
    by: "",
    foi: "",
    msg: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Router for navigation

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateMail = async () => {
    setLoading(true);
    const API_KEY = "AIzaSyDlRA5b4tJrzuts_GpdwyPbfJiODBGiLnQ"; // Replace with your API key

    const prompt = `
      Generate a beautiful email:
      - Formality: ${formData.foi}
      - To: ${formData.whom}
      - From: ${formData.by}
      - Message: ${formData.msg}
    `;

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
          API_KEY,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        }
      );

      const result = await response.json();
      const generatedText = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (generatedText) {
        localStorage.setItem("generatedMail", generatedText); // Store response in localStorage
        router.push("/generatedmail"); // Redirect to the display page
      } else {
        alert("No response received. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5 p-6">
        <h1 className="text-2xl font-medium text-center">
          No more boring <span className="text-yellow-400">mails</span>, just write down your content
        </h1>
        <div className="flex gap-5">
          <input
            className="rounded-xl p-5 text-black"
            placeholder="Formal or Informal??"
            name="foi"
            value={formData.foi}
            onChange={handleInputChange}
            type="text"
          />
          <input
            className="rounded-xl p-5 text-black"
            placeholder="To whom??"
            name="whom"
            value={formData.whom}
            onChange={handleInputChange}
            type="text"
          />
          <input
            className="rounded-xl p-5 text-black"
            placeholder="Your name"
            name="by"
            value={formData.by}
            onChange={handleInputChange}
            type="text"
          />
        </div>
        <input
          className="h-56 rounded-xl p-5 text-black"
          placeholder="Enter the description here..."
          name="msg"
          value={formData.msg}
          onChange={handleInputChange}
          type="text"
        />
        <button
          onClick={generateMail}
          className="rounded-xl p-3 bg-yellow-400 hover:bg-yellow-300 text-black text-lg font-semibold tracking-widest"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate a beautiful mail"}
        </button>
      </div>
    </div>
  );
};

export default Page;
