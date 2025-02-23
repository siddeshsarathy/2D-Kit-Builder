import React from "react";

const KitDisplay = ({ kitType, sport, color, logos, playerName, playerNumber, view }) => {
  return (
    <div className="kit-display" style={{ backgroundColor: color }}>
      <h2>{view} View - {kitType} ({sport})</h2>
      {logos.club && <img src={logos.club} alt="Club Logo" className="club-logo" />}
      {logos.sponsor && <img src={logos.sponsor} alt="Sponsor Logo" className="sponsor-logo" />}
      {logos.brand && <img src={logos.brand} alt="Brand Logo" className="brand-logo" />}
      {view === "Back" && (
        <>
          <p className="player-name">{playerName}</p>
          <p className="player-number">{playerNumber}</p>
        </>
      )}
    </div>
  );
};

export default KitDisplay;
