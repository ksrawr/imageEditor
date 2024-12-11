import { useState } from "react";

const Editor = ({
  tag,
  setTag,
  tagValue,
  setTagValue,
  disable,
  image,
  confirmed,
  showEditor,
  setShowEditor,
  setIsCursorActive,
}) => {

  return showEditor ? (
    <div className="container side overlay">
      <div className="top">
        <button onClick={() => setShowEditor(false)}>X</button>
      </div>
      <div className="container center">
        <input
          placeholder="Create a tag"
          value={tagValue}
          disabled={disable}
          onChange={(e) => setTagValue(e.target.value)}
        />
        <button
          onClick={() => setTag(tagValue)}
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
