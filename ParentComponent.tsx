import React from 'react';
import ChildComponent from './ChildComponent'

const ParentComponent = (props :any) => {

  

    let country = "Pakistan";
    console.log(country);
    
    
  return (
  
    <ChildComponent country = {country} />
  );
};

export default ParentComponent