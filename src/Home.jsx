import { navigate } from "wouter/use-location";
import { useState } from "react";

function Home() {
  const initialButtonIds = [100, 200, 300, 400, 500];
  const [selectedButtons, setSelectedButtons] = useState([]); // array to contain all selected buttons

  const handleButtonClick = (id) => {
    setSelectedButtons((prevSelectedButtons) => {
      if (prevSelectedButtons.includes(id)) {
        return prevSelectedButtons.filter((buttonId) => buttonId !== id);
      } else {
        return [...prevSelectedButtons, id];
      }
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
      <div style={{ padding: "20px", margin: "20px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {initialButtonIds.map((id) => (
          <button key={id} id={id} onClick={() => handleButtonClick(id)} className={selectedButtons.includes(id) ? "selected" : ""}>
            {selectedButtons.includes(id) ? "Selected" : "Select Me"}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
