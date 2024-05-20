import React, { useContext, useRef } from "react";
import "./Image.css";
import { Context } from "./Context";
import Draggable from "react-draggable";
import Editor from "./Editor";

function Image() {
  const {
    initialState,
    setInitialState,
    editingState,
    setEditingState,
    ref,
    details,
    setDetails,
    open,
    setOpen,
  } = useContext(Context);

  const handleImage = (e) => {
    if (e.target.files.length == 0) return false;

    const reader = new FileReader();
    reader.onload = () => {
      setInitialState({
        ...initialState,
        image: reader.result,
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleEdit = () => {
    setEditingState({
      ...editingState,
      image: initialState.image,
    });
    setOpen(true);
  };

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = details.naturalWidth;
    canvas.height = details.naturalHeight;
    const ctx = canvas.getContext("2d");

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((initialState.rotation * Math.PI) / 180);
    ctx.scale(initialState.vertical, initialState.horizontal);

    ctx.drawImage(
      details,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );

    const link = document.createElement("a");
    link.download = "image_edit.jpg";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="Home_Page">
      <header>
        <h2>Image Editor</h2>
      </header>
      <section className="home_Image_preview">
        <div className="Home_page_menu">
          <div>
            {initialState.image && (
              <button
                className="H_menu_btn edit_btn"
                onClick={() => handleEdit()}
              >
                <i className="fa fa-edit"></i>
              </button>
            )}
            {initialState.image && (
              <button
                className="H_menu_btn download_btn"
                onClick={() => handleDownload()}
              >
                <i className="fa fa-download"></i>
              </button>
            )}
          </div>
          <div>
            <label htmlFor="image_Selection" className="H_menu_btn choose_btn">
              Choose Image
            </label>
            <input
              className="image_Selection"
              id="image_Selection"
              type="file"
              onChange={(e) => handleImage(e)}
            />
          </div>
        </div>

        <div className="Home_Image_Area">
          <Draggable
            nodeRef={ref}
            bounds="parent"
            defaultPosition={initialState.position}
          >
            <div
              ref={ref}
              style={{
                position: "absolute",
                cursor: "move",
              }}
            >
              {initialState.image && <img
                onLoad={(e) => setDetails(e.currentTarget)}
                src={initialState.image}
                style={{
                  transform: `rotate(${initialState.rotation}deg) scale(${initialState.vertical}, ${initialState.horizontal}) scale(${initialState.scale})`,
                }}
              />}
            </div>
          </Draggable>
        </div>
        {open && <Editor />}
      </section>
    </div>
  );
}

export default Image;
