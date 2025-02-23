import React, { useState } from "react";
import Controls from "./components/Controls";
import KitDisplay from "./components/KitDisplay";
import UploadSection from "./components/UploadSection";

const App = () => {
  const [kitType, setKitType] = useState("Jersey");
  const [sport, setSport] = useState("Soccer");
  const [color, setColor] = useState("#ff0000");
  const [pattern, setPattern] = useState("None");
  const [logos, setLogos] = useState({ club: null, sponsor: null, brand: null });
  const [playerName, setPlayerName] = useState("");
  const [playerNumber, setPlayerNumber] = useState("");
  const [view, setView] = useState("Front");

  return (
    <div className="container">
      <h1>2D Kit Builder</h1>
      <Controls 
        setKitType={setKitType} 
        setSport={setSport}
        setColor={setColor} 
        setPattern={setPattern}
        setView={setView}
      />
      <UploadSection setLogos={setLogos} />
      <KitDisplay 
        kitType={kitType}
        sport={sport}
        color={color} 
        pattern={pattern}
        logos={logos}
        playerName={playerName}
        playerNumber={playerNumber}
        view={view}
      />
    </div>
  );
};

export default App;
