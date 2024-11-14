import "./index";
import { useState, useEffect } from "react";
import ImageViewer from "./ImageViewer";
import CrosshairCursor from "./CrosshairCursor";
import DrawBoxes from "./DrawBoxes";

export default function App() {
  const [image, setImage] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const [isCrossHairActive, setIsCrossHairActive] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmImageUpload = () => {
    if (image) {
      setConfirmed(true);
    }
  };

  // const handleImageClick = (e) => {
  //   console.log("heloooooo");
  // };

  useEffect(() => {
    if(image && confirmed) {
      setIsCrossHairActive(true);
    }
  }, [image, confirmed]);

  return (
    <div className="container_fullscreen">
      <CrosshairCursor isCrossHairActive={isCrossHairActive}>
        <DrawBoxes enabled={isCrossHairActive}>
          <ImageViewer
            image={image}
            handleOnClick={handleConfirmImageUpload}
            handleImageUpload={handleImageUpload}
            // handleImageClick={handleImageClick}
            confirmed={confirmed}
          />
        </DrawBoxes>
      </CrosshairCursor>
    </div>
  );
}
