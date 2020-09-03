import React from "react";

function Col(props) {
  const size = "col-md-12";

  return <div className={size} {...props} />;
}

export default Col;
