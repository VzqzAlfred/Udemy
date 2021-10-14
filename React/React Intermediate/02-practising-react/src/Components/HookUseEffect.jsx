import {useEffect, useState} from "react";


const HookUseEffect = () => {
     const [name, setName] = useState("");
     const [age, setAge] = useState(0);

     /* ComponentDidUpdate */
     useEffect(() => {

          const functionAsync = async () => {};
          functionAsync().catch(null);

          console.log("didUpdate effect");  
     });

     /* ComponenteDidMount */
     useEffect(() => {
          console.log("didMount effect");

          return () => {
               console.log("WillUnmount");
          }
     }, []);

     useEffect(() => {
          console.log("Name or Age has changed");
     }, [name, age])


     
     return(
          <div>
               <h2>Hook useEffect</h2>
               <input type={name} onChange={({target : { value }}) => setName(value)} />

               <br />
               <input type={age} onChange={({target : { value }}) => setAge(value)} />
          </div>
     );
}

export default HookUseEffect;