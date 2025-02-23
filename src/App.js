import React, { useState } from "react";
import Controls from "./components/Controls";
import KitDisplay from "./components/KitDisplay";
import UploadSection from "./components/UploadSection";

const App = () => {
  const [kitType, setKitType] = useState("Jersey");
  const [color, setColor] = useState("#ff0000");
  const [logos, setLogos] = useState({ club: null, sponsor: null, brand: null });
  const [view, setView] = useState("Front");

  return (
    <div className="container">
      <h1>2D Kit Builder</h1>
      <Controls setKitType={setKitType} setColor={setColor} setView={setView} />
      <UploadSection setLogos={setLogos} />
      <KitDisplay kitType={kitType} color={color} logos={logos} view={view} />
    </div>
  );
};

export default App;
