import "./index";
import { useState, useEffect } from "react";
import ImageViewer from "./ImageViewer";
import Cursor from "./Cursor";
import DrawBoxes from "./DrawBoxes";

export default function App() {
  const [image, setImage] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const [isCursorActive, setIsCursorActive] = useState(false);

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
      setIsCursorActive(true);
    }
  }, [image, confirmed]);

  return (
    <div className="container_fullscreen">
      <Cursor isCursorActive={isCursorActive}>
        <DrawBoxes enabled={isCursorActive}>
          <ImageViewer
            image={image}
            handleOnClick={handleConfirmImageUpload}
            handleImageUpload={handleImageUpload}
            // handleImageClick={handleImageClick}
            confirmed={confirmed}
          />
        </DrawBoxes>
      </Cursor>
    </div>
  );
}
