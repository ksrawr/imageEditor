import { useState } from "react";

const ImageViewer = ({
  image,
  confirmed,
  handleImageUpload,
  handleOnClick,
  handleImageClick,
}) => {
  return (
    <div className="container main">
      {image && confirmed ? (
        <img
          src={image}
          alt="Uploaded preview"
          style={{ maxWidth: "100%", height: "auto" }}
          onClick={handleImageClick}
        />
      ) : (
        <>
          <label for="img">Select image:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <button onClick={handleOnClick}>Upload</button>
        </>
      )}
    </div>
  );
};

export default ImageViewer;
