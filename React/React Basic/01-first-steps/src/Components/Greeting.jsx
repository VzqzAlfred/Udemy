import React from 'react'

export const Greeting = (props) => {

     console.log(props);
     return (
          <>
               <h2>Hi {props.name} my height is {props.height} cm.</h2>
          </>
     )
}
