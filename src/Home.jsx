import { navigate } from "wouter/use-location";
import { useState } from "react";

function Home() {
    const handleButtonClick = (id) => {
        const button = document.getElementById(id);
        const text = button.innerText;
        button.innerText = text === "Select Me" ? "Selected" : "Select Me";
      };

  return (
    <div>
      <h1>Home Page</h1>
      <button  onClick={() => navigate("/")}>Go Back</button>
      <div style={{ padding: "20px", margin: "20px",  display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <button id="100" onClick={() => handleButtonClick("100")}>
          Select Me
        </button>
        <button id="200" onClick={() => handleButtonClick("200")}>
          Select Me
        </button>
        <button id="300" onClick={() => handleButtonClick("300")}>
          Select Me
        </button>
        <button id="400" onClick={() => handleButtonClick("400")}>
          Select Me
        </button>
        <button id="500" onClick={() => handleButtonClick("500")}>
          Select Me
        </button>
      </div>
    </div>
  );
}

export default Home;
