import React, { useContext } from "react";
import { UserContext } from "../UserContext";
//import { login } from "../utils/login";

export function Index() {
  const { contextPars, contextDispatch } = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(contextPars)}</pre>
     
      {contextPars.logged ? (
        <button
          onClick={() => {
            // call logout
          //  setUser({...user, logged: false, name: "", age: ""});
          contextDispatch({type: 'logout'})
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
         //   const user = await login();
         contextDispatch({type: 'login'})
        alert("the onclick works")
           // setUser({...user, logged: true, name: "user1", age: "20"});
          }}
        >
          login
        </button>
      )}
    </div>
  );
}