import React from "react";

function FallBack({ error, resetErrorBoundary }) {
  return (
    <>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </>
  );
}

export default FallBack;