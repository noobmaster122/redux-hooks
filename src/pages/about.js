import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function About() {
  const { contextPars } = useContext(UserContext);

  return (
    <div>
      <h2>About</h2>
      <pre>{JSON.stringify(contextPars)}</pre>
    </div>
  );
}