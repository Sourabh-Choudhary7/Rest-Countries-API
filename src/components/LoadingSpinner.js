import React from "react";

function LoadingSpinner({isLoading}) {
  console.log(isLoading);
  return <> 
  {
    isLoading ? <div className="loader">Loading...</div> : false

  }
  
</>
}

export default LoadingSpinner;
