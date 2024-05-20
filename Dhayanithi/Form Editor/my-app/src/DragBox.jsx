import React from "react";
import { Rnd } from "react-rnd";

function DragBox({ box, setBox, setIndex, setInput }) {
  const handleResize = (index, position, size) => {
    const updatedBox = [...box];
    updatedBox[index] = {
      ...updatedBox[index],
      position,
      ...size,
    };
    setBox(updatedBox);
  };

  const handleDrag = (index, position) => {
    const updatedBox = [...box];
    updatedBox[index] = {
      ...updatedBox[index],
      position,
    };
    setBox(updatedBox);
  };

  const handleRemove = (Id) => {
    const newBox = box.filter((item) => item.id !== Id);
    setBox(newBox);
  };

  const handleView = (i) => {
    setIndex(i);
    setInput("");
  };

  return (
    <>
      {box.map((item, index) => (
        <Rnd
          bounds="parent"
          key={item.id}
          className="Rnd-Div"
          default={{
            x: item.position.x,
            y: item.position.y,
            width: item.width,
            height: item.height,
          }}
          onResize={(e, direction, ref, delta, position) =>
            handleResize(index, position, {
              width: ref.offsetWidth,
              height: ref.offsetHeight,
            })
          }
          onDragStop={(e, d) => handleDrag(index, d)}
        >
          {item.name}
          <button
            className="view_btn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => handleView(index)}
          >
            view
          </button>

          <button className="remove_btn" onClick={() => handleRemove(item.id)}>
            X
          </button>
        </Rnd>
      ))}
    </>
  );
}

export default DragBox;
