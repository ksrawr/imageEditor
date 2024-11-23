import { useState } from "react";

const Cursor = ({ children, type, isCursorActive }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const displayCursor = () => {
    switch(type) {
        case "crosshair":
            return;
            break;
        case "box":
            break;
    }
  };

  return (
    <div
      onMouseMove={isCursorActive ? handleMouseMove : null}
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        cursor: isCursorActive ? "none" : "default",
      }}
    >
      <div className="container full" style={{ position: "relative" }}>
        {children}
      </div>
      {isCursorActive && (
        <>
          {{/* Display Custom Cursor */}}
          {displayCursor()}
        </>
      )}
    </div>
  );
};

export default Cursor;
