import React from "react";

const OperatorButton = (props) => {
 return (
<>

 {/* Display a button element rendering the data being 
  passed down from the parent container on props */

<button style = {{height: "80px",width: "80px"}}
className = "button btn-darkBlue">{props.operators.value}
</ button >

 }

 </>

 );

 };

 

 export default OperatorButton