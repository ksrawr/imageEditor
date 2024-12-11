import "./index";
import { useState, useEffect } from "react";
import Editor from "./Editor";
import ImageViewer from "./ImageViewer";
import Cursor from "./Cursor";
import DrawBoxes from "./DrawBoxes";

const initialState = {
  startX: null,
  startY: null,
  endX: null,
  endY: null,
}

export default function App() {
/* 
  TODO:
  - Capture the dimensions of each box and display them in a seperate side panel. This needs to show where in the photo this box is capturing!
*/

  const [image, setImage] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const [isCursorActive, setIsCursorActive] = useState(false);
  const [cursorType, setCursorType] = useState("crosshair");
  const [repositionBoxInfo, setRepositionBoxInfo] = useState(initialState);
  const [tagValue, setTagValue] = useState("");
  const [tag, setTag] = useState("");
  const [disable, setDisable] = useState(false);
  const [showEditor, setShowEditor] = useState(true);

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

  useEffect(() => {
    if(image && confirmed) {
      setIsCursorActive(true);
    }
  }, [image, confirmed]);

  return (
    <div className="container_fullscreen">
      <Editor 
        disable={disable} 
        tag={tag}
        setTag={setTag}
        tagValue={tagValue}
        setTagValue={setTagValue}
        showEditor={showEditor}
        setShowEditor={setShowEditor}
        setIsCursorActive={setIsCursorActive}
      />
      <Cursor 
        isCursorActive={isCursorActive}
        type={cursorType}
        repositionBoxInfo={repositionBoxInfo}
      >
        <DrawBoxes 
          enabled={isCursorActive} 
          setCursorType={setCursorType} 
          cursorType={cursorType}
          repositionBoxInfo={repositionBoxInfo}
          setRepositionBoxInfo={setRepositionBoxInfo}
          tag={tag}
        >
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
