import React, { useState, useEffect } from "react";

const TypingSign = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "Conheça a Fatec";
  const typingSpeed = 150; 

  const typeNextCharacter = (index) => {
    if (index <= textToType.length) {
      setTypedText(textToType.slice(0, index));
      setTimeout(() => {
        typeNextCharacter(index + 1);
      }, typingSpeed);
    } else {
      setTypedText(""); 
      setTimeout(() => {
        typeNextCharacter(1);
      }, typingSpeed);
    }
  };

  useEffect(() => {
    typeNextCharacter(1); 
  }, []);

  return <h1>{typedText}</h1>;
};

export default TypingSign;
