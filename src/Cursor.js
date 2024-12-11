import { useState } from "react";
import CrosshairCursor from "./CrosshairCursor";
import BoxCursor from "./BoxCursor";

const Cursor = ({ children, type="box", isCursorActive, repositionBoxInfo }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const displayCursor = () => {
    if(!isCursorActive) return;
    const { x, y } = cursorPosition || {};
    switch(type) {
        case "crosshair":
            return (
                <CrosshairCursor x={x} y={y}/>
            );
        case "box":
            return (
                <BoxCursor x={x} y={y} boxInfo={repositionBoxInfo}/>
            );
    }
  };

  const styling = {
    crosshair: {
        cursor: isCursorActive ? "none" : "default",
    },
    box: {
        cursor: "grab",
    }
};

  return (
    <div
      onMouseMove={isCursorActive ? handleMouseMove : null}
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        cursor: styling[type]?.cursor,
      }}
    >
      <div className="container full" style={{ position: "relative" }}>
        {children}
      </div>
      {/* Display Custom Cursor */}
      {isCursorActive && (
        displayCursor()
      )}
    </div>
  );
};

export default Cursor;
