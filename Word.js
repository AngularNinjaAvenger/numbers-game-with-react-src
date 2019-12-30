import React from 'react'
import './styles.css'
export default (props) => {
  let wd = props.word;
  if(!wd){
  wd="enter any to continue" 
    return (
      <div className="row kikp">
      <div className=" col-lg-8 col-md-8 col-sm-8 timilehin" style={{
          color: "yellow",
          fontSize: "15px"
      }}>
        {wd.toUpperCase()}
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 counter timilehin">
         {props.counter}
        </div>
      </div>
    ) 
  }
  else{
return (
  <div className="row kikp">
  <div className=" col-lg-8 col-md-8 col-sm-8 timilehin" style={{
      color: "rgb(255, 7, 7)",
      fontSize: "50px"
  }}>
    {wd.toUpperCase()}
    </div>
    <div className="col-lg-1 col-md-1 col-sm-1 counter timilehin">
     {props.counter}
    </div>
  </div>
)
  }
  }
