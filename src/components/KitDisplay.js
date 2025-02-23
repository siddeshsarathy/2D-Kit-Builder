import React from "react";
import "./KitDisplay.css"; // Ensure correct styling

const KitDisplay = ({ kitType, color, logos, view }) => {
  const renderKit = () => {
    switch (kitType) {
      case "Jersey":
        return (
          <svg width="200" height="250" viewBox="0 0 200 250">
            {/* Jersey Shape */}
            <path d="M50,20 L150,20 L180,50 L160,100 L160,220 L40,220 L40,100 L20,50 Z" fill={color} stroke="black" strokeWidth="3" />
            {/* Sleeves */}
            <path d="M20,50 L50,20 L40,100 Z" fill={color} stroke="black" strokeWidth="3" />
            <path d="M150,20 L180,50 L160,100 Z" fill={color} stroke="black" strokeWidth="3" />
            {/* Club Logo */}
            {logos.club && <image href={logos.club} x="70" y="50" height="40" width="40" />}
            {/* Sponsor Logo */}
            {logos.sponsor && <image href={logos.sponsor} x="60" y="120" height="50" width="80" />}
          </svg>
        );

      case "Shorts":
        return (
          <svg width="150" height="150" viewBox="0 0 150 150">
            {/* Shorts Shape */}
            <path d="M30,20 L120,20 L140,80 L110,140 L40,140 L10,80 Z" fill={color} stroke="black" strokeWidth="3" />
            {/* Brand Logo */}
            {logos.brand && <image href={logos.brand} x="50" y="100" height="20" width="20" />}
          </svg>
        );

      case "Stockings":
        return (
          <svg width="80" height="200" viewBox="0 0 80 200">
            {/* Stocking Shape */}
            <path d="M20,0 L60,0 L70,150 L40,200 L10,150 Z" fill={color} stroke="black" strokeWidth="3" />
          </svg>
        );

      default:
        return <p>No kit selected</p>;
    }
  };

  return <div className="kit-container">{renderKit()}</div>;
};

export default KitDisplay;
