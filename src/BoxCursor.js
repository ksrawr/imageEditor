const BoxCursor = ({ x, y }) => {
  return (
    <>
    <div
        style={{
            position: "fixed",
            top: y,
            left: x,
            width: "300px",
            height: "300px",
            backgroundColor: "red",
            pointerEvents: "none", // Allow clicks to pass through
            zIndex: 9,
        }}
    />
    </>
  );
};

export default BoxCursor;
