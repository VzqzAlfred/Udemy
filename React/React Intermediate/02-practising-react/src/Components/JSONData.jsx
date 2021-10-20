import React, { useState, useEffect } from 'react';

 const jsonData = [{
               key: 1,
               name: "Jhon"
          }, {
               key: 2,
               name: "Tom"
          }, {
               key: 3,
               name: "Madds"
          }, {
               key: 4,
               name: "Klauss"
          }
     ];

const JSONData = () => {
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
               setTimeout(() => {
                   setIsLoading(false);
               }, 4000);
          }, []);

     const renderData = () => {
          return jsonData?.map(el => <li key={el.key}>{el.name}</li>);
     }

     return (
          <div style={{textAlign: "center"}}>
               <h3>Hey! What's up</h3>

               <ul>
                    {
                         isLoading 
                              ? <h2>Is Loading...</h2> 
                              : renderData()
                    }
               </ul>
          </div>
     )
}

export default JSONData
