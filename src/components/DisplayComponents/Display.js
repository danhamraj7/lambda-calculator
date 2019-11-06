import React,{useState} from "react";

import "../../App.css";

const Display = () => {

  const [result] = useState(0);

  return <div style = {{height: "80px",width: "400px"}}
  className = "displayContainer">{result}</div>;
};


export default Display;