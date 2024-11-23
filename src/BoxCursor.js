const BoxCursor = ({ x, y }) => {
  return (
    <>
    <div
        style={{
            position: "fixed",
            top: `${y - (300/2)}px`,
            left: `${x - (300/2)}px`,
            width: "300px",
            height: "300px",
            border: "1px solid red",
            pointerEvents: "none", // Allow clicks to pass through
            zIndex: 9,
            display: "flex",
            alignItems: "end",
            justifyContent: "right",
        }}
    >
        <div>
            <button>X</button>
        </div>
    </div>
    </>
  );
};

export default BoxCursor;
