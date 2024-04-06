import React from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Draggable from "react-draggable";
import "./Image.css";
import { useContext } from "react";
import { Context } from "./Context";

function Editor() {
  const {
    initialState,
    setInitialState,
    editingState,
    setEditingState,
    ref,
    crop,
    setCrop,
    details,
    setDetails,
    open,
    setOpen,
  } = useContext(Context);

  const handleLeftRotation = () => {
    setEditingState({
      ...editingState,
      rotation: editingState.rotation - 90,
    });
  };
  const handleRightRotation = () => {
    setEditingState({
      ...editingState,
      rotation: editingState.rotation + 90,
    });
  };

  const handleLeftFilp = () => {
    setEditingState({
      ...editingState,
      vertical: editingState.vertical === 1 ? -1 : 1,
    });
  };
  const handleRightFilp = () => {
    setEditingState({
      ...editingState,
      horizontal: editingState.horizontal === 1 ? -1 : 1,
    });
  };

  const handleZoomIn = () => {
    setEditingState({
      ...editingState,
      scale: editingState.scale + 0.1,
    });
  };
  const handleZoomOut = () => {
    setEditingState({
      ...editingState,
      scale: editingState.scale - 0.1,
    });
  };

  const handleCropOpen = () => {
    setEditingState({
      ...editingState,
      isCropping: true,
    });
  };

  const handleCropImage = () => {
    const canvas = document.createElement("canvas");
    const scaleX = details.naturalWidth / details.width;
    const scaleY = details.naturalHeight / details.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      details,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Url = canvas.toDataURL("image/jpg");

    setEditingState({
      ...editingState,
      image: base64Url,
      isCropping: false,
    });
  };

  const handleReset = () => {
    setEditingState(initialState);
  };

  const handleBack = () => {
    setEditingState(initialState);
    setOpen(false);
  };

  const handleSave = () => {
    setInitialState(editingState);
    setOpen(false);
  };

  const handleStop = (e, data) => {
    console.log(`x :${data.lastX}px, y: ${data.lastY}px `);
    setEditingState({
      ...editingState,
      position: {
        ...editingState.position,
        x: data.lastX,
        y: data.lastY,
      },
    });
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "999",
        }}
      ></div>
      <section className="main">
        <div className="back_div">
          <button className="back_btn" onClick={() => handleBack()}>
            <i className="fa fa-xmark"></i>
          </button>
        </div>

        <div className="btn_Section">
          <button onClick={handleCropOpen}>
            <i className="fa fa-crop"></i>
          </button>
          <button onClick={handleLeftRotation}>
            <i className="fa fa-rotate-left"></i>
          </button>
          <button onClick={handleRightRotation}>
            <i className="fa fa-rotate-right"></i>
          </button>
          <button onClick={handleZoomIn}>
            <i className="fa-solid fa-magnifying-glass-plus"></i>
          </button>
          <button onClick={handleZoomOut}>
            <i className="fa-solid fa-magnifying-glass-minus"></i>
          </button>
          <button onClick={handleLeftFilp}>
            {/* <i className="fa fa-reflect-vertical"></i> */}
            Flip Left
          </button>
          <button onClick={handleRightFilp}>
            {/* <i className="fa fa-reflect-horizontal"></i> */}
            Flip Top
          </button>
        </div>

        <div className="section_B">
          <div className="Image_Area">
            {editingState.image && editingState.isCropping ? (
              <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
                <div className="resizer nw"></div>
                <div className="resizer ne"></div>
                <div className="resizer sw"></div>
                <div className="resizer se"></div>
                <img
                  className="img"
                  onLoad={(e) => setDetails(e.currentTarget)}
                  src={editingState.image}
                  style={{
                    transform: `rotate(${editingState.rotation}deg) scale(${editingState.vertical}, ${editingState.horizontal}) scale(${editingState.scale})`,
                    top: `${editingState.position.y}px`,
                    left: `${editingState.position.x}px`,
                  }}
                />
              </ReactCrop>
            ) : (
              <Draggable
                nodeRef={ref}
                bounds="parent"
                onStop={handleStop}
                defaultPosition={{
                  x: editingState.position.x,
                  y: editingState.position.y,
                }}
              >
                <div
                  ref={ref}
                  style={{
                    position: "absolute",
                    cursor: "move",
                    zIndex: "1000",
                  }}
                >
                  <div className="resizer nw"></div>
                  <div className="resizer ne"></div>
                  <div className="resizer sw"></div>
                  <div className="resizer se"></div>
                  <div className="resizer n"></div>
                  <div className="resizer e"></div>
                  <div className="resizer w"></div>
                  <div className="resizer s"></div>
                  <img
                    className="img"
                    onLoad={(e) => setDetails(e.currentTarget)}
                    src={editingState.image}
                    style={{
                      transform: `rotate(${editingState.rotation}deg) scale(${editingState.vertical}, ${editingState.horizontal}) scale(${editingState.scale})`,
                      // top: `${editingState.position.y}px`,
                      // left: `${editingState.position.x}px`,
                    }}
                  />
                </div>
              </Draggable>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              {editingState.isCropping && (
                <button onClick={handleCropImage}>
                  <i className="fa fa-check"></i>
                </button>
              )}
            </div>
            <div>
              <button className="resetbtn" onClick={handleReset}>
                Reset
              </button>
              <button className="Savebtn" onClick={() => handleSave()}>
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Editor;
