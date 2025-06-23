import React from 'react';
import Component from './first-child-comp'

const App = () => {
   console.log("process.env",process.env.REACT_APP_ENV)
  return (
    <>
     <Component />
    </>
  )
  
};

export default App;
