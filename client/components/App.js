import React from "react";

const App = (props) => {
  return (
    <div className="container">
      <p>welcome</p>
      {props.children}
    </div>
  );
};

export default App;
