
import React from "react";

const SpecialButton = (props) => {

  return (
     <>

    {/* Display a button element rendering the data being passed down from the parent container on props */

      <button style = {{height: "80px", width: "80px"}}
      className = "button btn-darkBlue"> {props.specials}

      </ button>

    }

    </>

  );

};

export default SpecialButton
