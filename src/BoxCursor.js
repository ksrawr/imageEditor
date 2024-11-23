import { useState } from "react";

const BoxCursor = ({ children, isBoxCursorActive }) => {
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
      onMouseMove={isBoxCursorActive ? handleMouseMove : null}
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        cursor: isBoxCursorActive ? "none" : "default",
      }}
    >
      <div className="container full" style={{ position: "relative" }}>
        {children}
      </div>
      {isBoxCursorActive && (
        <>
        <div
            style={{
                position: "fixed",
                top: cursorPosition.x,
                left: cursorPosition.x,
                width: "300px",
                height: "300px",
                backgroundColor: "red",
                pointerEvents: "none", // Allow clicks to pass through
                zIndex: 9,
            }}
        />
        </>
      )}
    </div>
  );
};

export default BoxCursor;
