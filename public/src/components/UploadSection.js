import React from "react";

const UploadSection = ({ setLogos }) => {
  const handleUpload = (type, event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogos((prev) => ({ ...prev, [type]: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Only PNG and JPG files are allowed.");
    }
  };

  return (
    <div className="upload-section">
      <label>Club Logo:</label>
      <input type="file" accept="image/png, image/jpeg" onChange={(e) => handleUpload("club", e)} />

      <label>Sponsor Logo:</label>
      <input type="file" accept="image/png, image/jpeg" onChange={(e) => handleUpload("sponsor", e)} />

      <label>Brand Logo:</label>
      <input type="file" accept="image/png, image/jpeg" onChange={(e) => handleUpload("brand", e)} />
    </div>
  );
};

export default UploadSection;
