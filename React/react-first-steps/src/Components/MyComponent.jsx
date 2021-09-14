import React, {Component} from "react";

class MyComponent extends Component{
     

     render(){
          let card = {
               name: "pizza",
               material: ["tomatoe", "Cheese", "meat"],
               calories: "600"
          }


          return (
          <>
               <div style={{
                    border: "thin solid #ddd",
                    margin: "0.5rem auto",
                    minWidth: "35vw",
                    background: "#d0d0d025"
               }}>
                    <h2>{card.name.toUpperCase()}</h2>
                    <p><i>How to do a Pizza</i> 🤤🍕 with {card.calories} calories.</p>
                    <b>Material</b>
                    <ul>
                         {card.material.map( (el, i) => (<li key={i}>{el}</li>))}
                    </ul>
               </div>
          </>
          );
     }
}

export default MyComponent
