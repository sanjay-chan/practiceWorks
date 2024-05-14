import React from "react";
import Form from "./Form";
import { ErrorBoundary } from "react-error-boundary";
import FallBack from "./FallBack";

function App() {
  const name = "name";
  return (
    <ErrorBoundary FallbackComponent={FallBack}>
      <Form name={name} />
    </ErrorBoundary>
  );
}

export default App;
