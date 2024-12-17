"use client";

import React, { useEffect, useState, useRef } from "react";

const GeneratedMail = () => {
  const [mailContent, setMailContent] = useState("");
  const [displayText, setDisplayText] = useState(""); // For typewriter effect
  const [penPosition, setPenPosition] = useState({ top: 0, left: 0 }); // Pen position
  const contentRef = useRef(null);

  useEffect(() => {
    // Retrieve mail content from local storage
    const storedMail = localStorage.getItem("generatedMail") || "No mail content found!";
    setMailContent(storedMail);

    // Clear displayText before typing starts
    setDisplayText("");

    let index = 0;

    // Simulate text being typed letter by letter
    const interval = setInterval(() => {
      setDisplayText((prev) => {
        const updatedText = prev + storedMail.charAt(index);

        // Update pen position after each new letter is added
        updatePenPosition();

        return updatedText;
      });

      index++;
      if (index === storedMail.length) clearInterval(interval);
    }, 50); // Typing speed

    return () => clearInterval(interval); // Cleanup
  }, []);

  const updatePenPosition = () => {
    if (contentRef.current) {
      const range = document.createRange();
      const sel = window.getSelection();

      // Create a range at the end of the current text
      const node = contentRef.current.firstChild; // The text node
      if (node) {
        range.setStart(node, node.length);
        range.collapse(true);
        const rect = range.getBoundingClientRect();

        // Set the pen position to follow the text
        setPenPosition({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 relative">
      <h1 className="text-3xl font-bold text-yellow-400 mb-10">
        Your Beautiful Mail ✉️
      </h1>

      {/* Mail Content */}
      <div
        className="relative w-full max-w-3xl p-5 border border-yellow-400 rounded-lg bg-gray-800 text-white leading-relaxed"
        style={{ minHeight: "200px", position: "relative" }}
      >
        {/* Typing Content */}
        <p
          ref={contentRef}
          className="whitespace-pre-wrap"
          style={{ minHeight: "100px" }}
        >
          {displayText}
        </p>

        {/* Pen Animation */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Fountain_pen_icon.svg"
          alt="Pen"
          style={{
            position: "absolute",
            top: penPosition.top + 5 + "px", // Adjust for positioning
            left: penPosition.left + "px",
            width: "40px",
            transition: "top 0.05s ease-out, left 0.05s ease-out",
            transform: "rotate(-30deg)",
            pointerEvents: "none", // Avoid interfering with clicks
          }}
        />
      </div>
    </div>
  );
};

export default GeneratedMail;
