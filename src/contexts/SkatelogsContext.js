import React, { Component } from 'react';


export const nullSkatelog = {
  board: {}
}


const SkatelogContext = React.createContext({
  skatelog: nullSkatelog,
  error: null,
  setError: () => { },
  clearError: () => { },
  setSkatelog: () => { },
  clearSkatelog: () => { }
})