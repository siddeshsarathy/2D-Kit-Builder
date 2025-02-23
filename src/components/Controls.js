import React from "react";

const Controls = ({ setKitType, setColor, setView }) => {
  return (
    <div className="controls">
      <label>Kit Type:</label>
      <select onChange={(e) => setKitType(e.target.value)}>
        <option value="Jersey">Jersey</option>
        <option value="Shorts">Shorts</option>
        <option value="Stockings">Stockings</option>
      </select>

      <label>Color:</label>
      <input type="color" onChange={(e) => setColor(e.target.value)} />

      <button onClick={() => setView("Front")}>Front View</button>
      <button onClick={() => setView("Back")}>Back View</button>
    </div>
  );
};

export default Controls;
