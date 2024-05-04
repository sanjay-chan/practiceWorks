import { useRef, useState } from "react";
import "./drag.css";
import { Rnd } from "react-rnd";

function App() {
  const [box, setBox] = useState([]);

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

  const handleRemove = (Id) => {
    const newBox = box.filter((item) => item.id !== Id);
    setBox(newBox);
  };

  const handleSave = () => {
    console.log(box);
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

  return (
    <div className="body">
      <button className="create-btn" onClick={handleCreate}>
        Create
      </button>

      <button className="create-btn" onClick={handleSave}>
        Save
      </button>

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
            {item.id}
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

export default App;
