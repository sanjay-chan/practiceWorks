import React from "react";
import Drag from "./Drag";
import {ErrorBoundary} from "react-error-boundary";
import Form from "./Form";
import { ErrorBoundary } from "react-error-boundary";
import FallBack from "./FallBack";

function App() {
  const name = "name";

  // const handleError = (error, errorInfo) => {
  //   console.log(error);
  //   console.log(errorInfo);
  // }
  return (
    <ErrorBoundary FallbackComponent={FallBack}>
      <Form name={name} />
    </ErrorBoundary>
  );
}

export default App;
