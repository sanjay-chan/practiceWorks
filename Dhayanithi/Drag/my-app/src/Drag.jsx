import React from "react";
import { useState } from "react";
// import { useErrorHandler } from "react-error-boundary";
import "./drag.css";
import { Rnd } from "react-rnd";

function Drag(props) {
  const [box, setBox] = useState([]);
  const [input, setInput] = useState();
  const [index, setIndex] = useState();

  // const handleError = useErrorHandler();

  const handleCreate = () => {
    const newId = box.length + 1;
    const newPositionX = box.length * 20;
    const newData = {
      id: newId,
      position: { x: newPositionX, y: 20 },
      width: 200,
      height: 50,
    };
    setBox((prevBox) => [...prevBox, newData]);
  };

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

  const handleSave = () => {
    console.log(box);
  };

  const handleClearAll = () => {
    setBox([]);
  };

  const handleView = (i) => {
    setIndex(i);
    setInput("");
  };

  const handleInputSave = () => {
    const updatedBox = [...box];
    updatedBox[index] = {
      ...updatedBox[index],
      name: input,
    };
    setBox(updatedBox);

    setInput("");
  };

  return (
    <div className="body">
      <button className="create-btn" onClick={handleCreate}>
        Create
      </button>

      <button className="create-btn" onClick={handleSave}>
        Save
      </button>

      <button className="create-btn" onClick={handleClearAll}>
        Clear All
      </button>

      <p>{props.name}</p>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Box Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {box
                .filter((item, i) => i == index)
                .map((item) => (
                  <div className=" ms-4 fw-bold text-left">
                    <div className="">
                      {item.name ? (
                        <p>Name - {item.name}</p>
                      ) : (
                        <form action="">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            id="name"
                            className="mx-3"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                          />
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleInputSave}
                          >
                            Save
                          </button>
                        </form>
                      )}
                      <div className="mb-3">
                        <span className="me-3">Width - {item.width}</span>|
                        <span className="ms-3">Height - {item.height} </span>
                      </div>
                      <div>
                        <span className="me-3">Left - {item.position.x}</span>|
                        <span className="ms-3">Top - {item.position.y}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary py-1"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="form-Area">
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

            <button
              className="remove_btn"
              onClick={() => handleRemove(item.id)}
            >
              X
            </button>
          </Rnd>
        ))}
      </div>
    </div>
  );
}

export default Drag;
