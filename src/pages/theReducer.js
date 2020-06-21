import React, { useState, useMemo, useReducer } from "react";

export const initialState = {
    name: "", 
    age: "", 
    logged: false,
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case 'login':
        return {...state, logged: true};
      case 'logout':
        return {...state, logged : false};
      default:
        throw new Error();
    }
  
  }