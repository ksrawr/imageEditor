import { useState } from "react";

const Editor = ({
  tag,
  handleOnChange,
  disable,
  handleOnClick,
  image,
  confirmed,
}) => {
  return (
    <div className="container side">
      <div>
        <input
          placeholder="Create a tag"
          value={tag}
          disabled={disable}
          onChange={handleOnChange}
        />
        <button
          onClick={handleOnClick}
          disabled={image && confirmed ? false : disable}
        >
          {disable ? "Unlock" : "Lock"}
        </button>
      </div>
    </div>
  );
};

export default Editor;
