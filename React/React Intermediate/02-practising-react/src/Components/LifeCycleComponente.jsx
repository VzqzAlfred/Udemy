import React from 'react';

class LifeCycleComponent extends React.Component {

     constructor(props){
          super(props);
          // console.log("Constructor");

          this.state = {
               name: ""
          }
     }

     componentDidMount(){
          // console.log("Did mount");
     }

     componentDidUpdate(){
          // console.log("Did update");
     }


     shouldComponentUpdate(){
          return true;
     }

     getSnapshotBeforeUpdate( prevProps, prevState ){
          // console.log(prevProps, prevState);
     }


     render(){
          return(
               <div>
                    <h2>Cycle life of a componente</h2>
                    <input type="text" value={this.state.name}  onChange={({ target: { value }}) => this.setState({ name: value})}/>
               </div>
          );
     }

}

export default LifeCycleComponent