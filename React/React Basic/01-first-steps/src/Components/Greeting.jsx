import React from 'react';

export const Greeting = ({user, Saludar}) => {

     // console.log(props);

     const {name, height, color} = user;
     
     return (
          <>
               {/* <h2>Hi {props.name}, my height is {props.height} cm.</h2> */}
               <h2>Hi {user.name}, my height is {user.height} cm. And my favorite color is: {user.color}</h2>

               <button onClick={ ()=> Saludar(name) }>Click me :D</button>
          </>
     )
}