import React from "react";

const ChildComponent = (props:any) => {



  console.log(props);
  
  
  return (
    <div>
      
      <h3 className="text-4xl">{props.country}</h3>

    </div>
  );
};

export default ChildComponent
