import React from "react";

const Controls = ({ setKitType, setSport, setColor, setPattern, setView }) => {
  return (
    <div className="controls">
      <label>Kit Type:</label>
      <select onChange={(e) => setKitType(e.target.value)}>
        <option value="Jersey">Jersey</option>
        <option value="Shorts">Shorts</option>
        <option value="Stockings">Stockings</option>
        <option value="Polo">Polo</option>
        <option value="Hoodie">Hoodie</option>
      </select>

      <label>Sport:</label>
      <select onChange={(e) => setSport(e.target.value)}>
        <option value="Soccer">Soccer</option>
        <option value="Basketball">Basketball</option>
        <option value="AFL">AFL</option>
        <option value="Netball">Netball</option>
        <option value="Cricket">Cricket</option>
      </select>

      <label>Color:</label>
      <input type="color" onChange={(e) => setColor(e.target.value)} />

      <label>Pattern:</label>
      <select onChange={(e) => setPattern(e.target.value)}>
        <option value="None">None</option>
        <option value="Stripes">Stripes</option>
        <option value="Gradient">Gradient</option>
        <option value="Camo">Camo</option>
      </select>

      <button onClick={() => setView("Front")}>Front View</button>
      <button onClick={() => setView("Back")}>Back View</button>
    </div>
  );
};

export default Controls;
