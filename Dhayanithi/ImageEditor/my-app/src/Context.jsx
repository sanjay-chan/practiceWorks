import { createContext, useState, useRef } from "react";

const Context = createContext();

function Provider({ children }) {
  const [initialState, setInitialState] = useState({
    image: "",
    rotation: 0,
    vertical: 1,
    horizontal: 1,
    scale: 1,
    isCropping: false,
    position : {x : 0 , y : 0}
  });

  const [editingState, setEditingState] = useState({
    image: "",
    rotation: 0,
    vertical: 1,
    horizontal: 1,
    scale: 1,
    isCropping: false,
    position : {x : 0 , y : 0}
   });
  
   const [crop, setCrop] = useState("");
   const [details, setDetails] = useState("");
   const [open, setOpen] = useState(false);
   const ref = useRef();

  return (
    <Context.Provider
      value={{initialState, setInitialState, editingState, setEditingState, ref, crop, setCrop, details, setDetails, open, setOpen,}}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
