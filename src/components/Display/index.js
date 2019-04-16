import React, { useState } from "react";

export const Display = () => {
  const [joke, setJoke] = useState("");

  const handleClick = () => {
    const options = {
      headers: {
        Accept: "application/json"
      }
    };
    fetch("https://icanhazdadjoke.com/", options)
      .then(data => data.json())
      .then(myJson => setJoke(JSON.stringify(myJson.joke)));
  };

  return (
    <>
      <div>{joke}</div>
      <button onClick={handleClick}>New Joke</button>
    </>
  );
};
