import React from "react";
import Image from "./Image";
import { Provider } from "./Context";

function App() {
  return (
    <Provider>
      <Image />
    </Provider>
  );
}

export default App;




























// import React, { useState } from 'react';
// import Draggable from "react-draggable"
// import './App.css'; // Import CSS for styling

// function App() {
//   const [state, setState] = useState({
//     width: 100,
//     height: 100,
//     top: 100,
//     left: 100,
//     rotateAngle: 0,
//     resizing: false,
//     rotating: false,
//     dragging: false,
//     startX: 0,
//     startY: 0,
//   });

//   const handleMouseDown = (e, action) => {
//     e.preventDefault();
//     const startX = e.clientX;
//     const startY = e.clientY;
//     setState({
//       ...state,
//       [action]: true,
//       startX,
//       startY,
//     });
//   };

//   const handleMouseUp = (e, action) => {
//     e.preventDefault();
//     setState({
//       ...state,
//       [action]: false,
//     });
//   };

//   const handleMouseMove = (e) => {
//     e.preventDefault();
//     const { startX, startY, width, height, left, top, rotateAngle, resizing, rotating, dragging } = state;

//     if (resizing) {
//       const deltaX = e.clientX - startX;
//       const deltaY = e.clientY - startY;
//       setState({
//         ...state,
//         width: Math.max(10, width + deltaX),
//         height: Math.max(10, height + deltaY),
//         startX: e.clientX,
//         startY: e.clientY,
//       });
//     } else if (rotating) {
//       const centerX = left + width / 2;
//       const centerY = top + height / 2;
//       const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
//       setState({
//         ...state,
//         rotateAngle: angle,
//       });
//     } else if (dragging) {
//       const deltaX = e.clientX - startX;
//       const deltaY = e.clientY - startY;
//       setState({
//         ...state,
//         left: left + deltaX,
//         top: top + deltaY,
//         startX: e.clientX,
//         startY: e.clientY,
//       });
//     }
//   };

//   return (

//     // <Draggable >
//     <div className="App" onMouseMove={handleMouseMove} onMouseUp={() => setState({ ...state, resizing: false, rotating: false, dragging: false })}
//     style={{
//       backgroundColor: "red",
//       position: "relative",
//       width: "100%",
//       height: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//     >
//       <div
//         className="resizable"
//         style={{
//           position: "absolute",
//           border: "2px solid #333",
//           cursor: "move",
//           width: `${state.width}px`,
//           height: `${state.height}px`,
//           top: `${state.top}px`,
//           left: `${state.left}px`,
//           transform: `rotate(${state.rotateAngle}rad)`,
//         }}
//       >
//         <div
//           className="handle top-left"
//           onMouseDown={(e) => handleMouseDown(e, 'resizing')}
//           onMouseUp={(e) => handleMouseUp(e, 'resizing')}
//           style={{
//             position: "absolute",
//             width: "10px",
//             height: "10px",
//             backgroundColor: "#333",
//             cursor: "nw-resize",
//             top: "-5px",
//             left: "-5px",
//           }}
//         />
//         <div
//           className="handle top-right"
//           onMouseDown={(e) => handleMouseDown(e, 'resizing')}
//           onMouseUp={(e) => handleMouseUp(e, 'resizing')}
//           style={{
//             position: "absolute",
//             width: "10px",
//             height: "10px",
//             backgroundColor: "green",
//             cursor: "ne-resize",
//             top: "-5px",
//             right: "-5px",
//           }}
//         />
//         <div
//           className="handle bottom-left"
//           onMouseDown={(e) => handleMouseDown(e, 'resizing')}
//           onMouseUp={(e) => handleMouseUp(e, 'resizing')}
//           style={{
//             position: "absolute",
//             width: "10px",
//             height: "10px",
//             backgroundColor: "#333",
//             cursor: "ne-resize",
//             bottom: "-5px",
//             left: "-5px",
//           }}
//         />
//         <div
//           className="handle bottom-right"
//           onMouseDown={(e) => handleMouseDown(e, 'resizing')}
//           onMouseUp={(e) => handleMouseUp(e, 'resizing')}
//           style={{
//             position: "absolute",
//             width: "10px",
//             height: "10px",
//             backgroundColor: "#333",
//             cursor: "nw-resize",
//             bottom: "-5px",
//             right: "-5px",
//           }}
//           />
//         <div
//           className="handle rotate"
//           onMouseDown={(e) => handleMouseDown(e, 'rotating')}
//           onMouseUp={(e) => handleMouseUp(e, 'rotating')}
//           style={{
//             position: "absolute",
//             width: "10px",
//             height: "10px",
//             backgroundColor: "red",
//             cursor: "rotate",
//             top: "-20px",
//             left: "45%",
//           }}
//           />
//         <div
//           className="handle drag"
//           onMouseDown={(e) => handleMouseDown(e, 'dragging')}
//           onMouseUp={(e) => handleMouseUp(e, 'dragging')}
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             backgroundColor: "blue",
//             cursor: "pointer",
//             // top: "-5px",
//             // left: "-5px",
//           }}
//           />
//       </div>
//     </div>
//     // {/* </Draggable> */}
//   );
// }

// export default App;
