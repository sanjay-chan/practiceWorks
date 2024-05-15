import React, { useState } from "react";
import "./Form.css";
import DragBox from "./DragBox";
import BoxDetailsModal from "./BoxDetailsModal";

function Form({ name }) {
  const [box, setBox] = useState([]);
  const [input, setInput] = useState();
  const [index, setIndex] = useState();
  
  const handleCreate = () => {
      const newId = box.length + 1;
      const newPositionX = box.length * 20;
      const newData = {
        id: newId,
        position: { x: newPositionX, y: 20 },
        width: 200,
        height: 50,
      };
      setBox((prevBox) => [...prevBox,newData]);
      // setBox((prevBox) => [...prevBox,undefined]);
      // setBox("ewsidfhwiesd");
      // setBox(null);
  };

  const handleSave = () => {
    console.log(box);
  };

  const handleClearAll = () => {
    setBox([]);
  };

  return (
    <div className="body">
      <div className="text-center">
        <button className="create-btn" onClick={handleCreate}>
          Create
        </button>
        <button className="create-btn" onClick={handleSave}>
          Console
        </button>
        <button className="create-btn" onClick={handleClearAll}>
          Clear All
        </button>
        <span className="mx-4">{name}</span>
      </div>

      <BoxDetailsModal
        box={box}
        setBox={setBox}
        index={index}
        input={input}
        setInput={setInput}
     />

      <div className="form-Area">
        <DragBox
          box={box}
          setBox={setBox}
          setIndex={setIndex}
          setInput={setInput}
        />
      </div>
    </div>
  );
}

export default Form;
