import { useState } from "react";

const Editor = ({
  tag,
  handleOnChange,
  disable,
  handleOnClick,
  image,
  confirmed,
  showEditor,
  setShowEditor,
}) => {

  return showEditor ? (
    <div className="container side overlay">
      <div className="top">
        <button onClick={() => setShowEditor(false)}>X</button>
      </div>
      <div className="container center">
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
  ) : (
    <div className="container side overlay minimize">
      <div>
        <button onClick={() => setShowEditor(true)}>&gt;&gt;</button>
      </div>
    </div>
  )
};

export default Editor;
