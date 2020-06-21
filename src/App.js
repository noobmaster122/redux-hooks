import React, { useState, useMemo, useReducer } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./pages/index";
import { About } from "./pages/about";
import { UserContext } from "./UserContext";
import {initialState, reducer} from './pages/theReducer'


function AppRouter() {
  /*const [user, setUser] = useState({
    name: "", 
    age: "", 
    logged: false,
  });*/

  const [state, dispatch] = useReducer(reducer, initialState);

  //const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{contextPars: state, contextDispatch: dispatch}}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;
