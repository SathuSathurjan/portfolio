import React from "react";
import { useState, useEffect } from "react";

const TextChanger = () => {
  const texts = ["Fullstack Web Developer", "Mobile App Developer", "Creative Web Designer"];
  const [currentText, setcurrentText] = useState("");
  const [endValue, setendValue] = useState(0);
  const [isForward, setisForward] = useState(true);
  const [textIndex, settextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrentText(texts[textIndex].substring(0, endValue));

      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }

      // Check if finished typing forward
      if (endValue >= texts[textIndex].length) {
        setTimeout(() => {
          setisForward(false);
        }, 1000); // Wait 1 second before starting to delete
      }

      // Check if finished deleting
      if (endValue < 2.1 && !isForward) {
        setisForward(true);
        settextIndex((prev) => (prev + 1) % texts.length);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, textIndex, texts]);

  return <div className="transition ease duration-300 text-blue-500">{currentText}</div>;
};

export default TextChanger;
