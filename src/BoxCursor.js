const BoxCursor = ({ x, y, boxInfo }) => {
  const {startX, startY, endY, endX} = boxInfo || {};
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const offsetStartX = x - (distanceX/2);
  const offsetStartY = y - (distanceY/2);
  const offsetEndX = x + (distanceX/2);
  const offsetEndY = y + (distanceY/2);
  return (
    <>
    <div
        style={{
            position: "fixed",
            top: `${offsetStartY}px`,
            left: `${offsetStartX}px`,
            height: `${offsetEndY - offsetStartY}px`,
            width: `${offsetEndX - offsetStartX}px`,
            border: "1px solid red",
            pointerEvents: "none", // Allow clicks to pass through
            zIndex: 9,
            display: "flex",
            alignItems: "end",
            justifyContent: "right",
        }}
    >
        <div>
        <button>+</button>
        </div>
        <div>
            <button>X</button>
        </div>
    </div>
    </>
  );
};

export default BoxCursor;
