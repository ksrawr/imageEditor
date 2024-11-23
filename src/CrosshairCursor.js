const CrosshairCursor = ({ x, y}) => {
  return (
    <>
      {/* Vertical line */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: x,
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
          top: y,
          left: 0,
          width: "100%",
          height: "2px",
          backgroundColor: "red",
          pointerEvents: "none",
          zIndex: 9,
        }}
      />
    </>
  );
};

export default CrosshairCursor;
