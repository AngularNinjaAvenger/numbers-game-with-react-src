import React from 'react'
import './bootstrap.css'
export default ({game,state}) => {
    let keys = Object.keys(game).map((item,index)=>{
        return (
            <tr key={index}>
                    <th scope="row">{item}</th>
                    {game[item].map((daniel,index)=>{
                        return (
                            <td key={daniel}>{daniel}</td>
                        )
                    })}
            </tr>
        )
    })
    if(state){
        return (
            <div>
                 BORDERED TABLE 
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>NUMBER</th>
                            <th collspacing="2">ALP</th>
                            <th collspacing="2">ALP</th>
                            <th collspacing="2">ALP</th>
                            <th collspacing="2">ALP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {keys}
                    </tbody>
                </table>
            </div>
          )
    }
  else{
      return(
          <div>

          </div>
      )
  }
}
