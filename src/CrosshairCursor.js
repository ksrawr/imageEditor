import { useState } from "react";

const CrosshairCursor = ({ children, isCrossHairActive }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={isCrossHairActive ? handleMouseMove : null}
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        cursor: isCrossHairActive ? "none" : "default",
      }}
    >
      <div className="container full" style={{ position: "relative" }}>
        {children}
      </div>
      {isCrossHairActive && (
        <>
          {/* Vertical line */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: cursorPosition.x,
              width: "2px",
              height: "100%",
              backgroundColor: "red",
              pointerEvents: "none", // Allow clicks to pass through
              zIndex: 9,
            }}
          />
          {/* Horizontal line */}
          <div
            style={{
              position: "fixed",
              top: cursorPosition.y,
              left: 0,
              width: "100%",
              height: "2px",
              backgroundColor: "red",
              pointerEvents: "none",
              zIndex: 9,
            }}
          />
        </>
      )}
    </div>
  );
};

export default CrosshairCursor;
