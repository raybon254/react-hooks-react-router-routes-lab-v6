import React from "react";
import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function Error() {
  const error = useRouteError();

  console.warn(error);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
        {error && error.message && (
          <p style={{ color: "red" }}>
            Error: {error.message}
          </p>
        )}
        {error && error.status && (
          <p>Status code: {error.status}</p>
        )}
      </main>
    </>
  );
}

export default Error;

