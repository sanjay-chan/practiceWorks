import React from "react";

function BoxDetailsModal({ box, setBox, index, input, setInput}) {
  const handleInputSave = () => {
        const updatedBox = [...box];
        updatedBox[index] = {
          ...updatedBox[index],
          name: input,
          isOpen: true,
        };
        setBox(updatedBox);
        setInput("");
  };

  const handleEdit = (name) => {
    setInput(name);
    const updatedBox = [...box];
    updatedBox[index] = {
      ...updatedBox[index],
      isOpen: false,
    };
    setBox(updatedBox);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
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

          <div className="modal-body text-secondary">
            {box
              .filter((item, i) => i == index)
              .map((item, index) => (
                <div className="fw-bold" key={index}>
                  {!item.isOpen ? (
                    <form
                      htmlFor=""
                      className="d-flex align-items-center mb-3 fw-bold"
                    >
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        className="mx-2"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        tabIndex={1}
                      />
                      <button
                        className="btn btn-primary btn-sm ms-2"
                        onClick={handleInputSave}
                      >
                        save
                      </button>
                    </form>
                  ) : (
                    <p>
                      Name - <span className="text-dark">{item.name}</span>
                      <button
                        className="btn btn-success ms-3 btn-sm"
                        onClick={() => handleEdit(item.name)}
                      >
                        Edit
                      </button>
                    </p>
                  )}
                  <div className="mb-3">
                    <span className="me-3">Width - {item.width}px</span>|
                    <span className="ms-2">Height - {item.height}px</span>
                  </div>
                  <div>
                    <span className="me-3">
                      Top - {item.position.y.toFixed(0)}px
                    </span>
                    |
                    <span className="ms-2">
                      Left - {item.position.x.toFixed(0)}px
                    </span>
                  </div>
                </div>
              ))}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxDetailsModal;
