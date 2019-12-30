import React from 'react'
import './styles.css'
export default function Input(props) {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
      <input type="text" onChange={(e)=>{props.change(e)}} value={props.value}/>
    </div>
  )
}
