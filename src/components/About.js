import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class About extends React.Component{

    constructor(props){
        super(props);


        // console.log("Parent Constructor");
    }

   componentDidMount(){
        // console.log("parent componentMount")
 
          
    }

    componentWillUnmount(){
        console.log("unmount will call");
       
    }

    render(){

        // console.log("Parent Render");
        return (
            <div>
                <h1>About Class Component</h1>
                {/* <User  name= {"Harsh rawat (functional)"} location = {"Agra (functional)" } contact = {"@harsh123 (functional)" } /> */}
                <UserClass name = {"Harsh Rawat (class)"} location = {"Agra (class)" } contact = {"@harsh123 (class)" }/>
               
            </div>
        )
    }


}


// const About = ()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             {/* <User  name= {"Harsh rawat (functional)"} location = {"Agra (functional)" } contact = {"@harsh123 (functional)" } /> */}
//             <UserClass name = {"Harsh Rawat (class)" } location = {"Agra (class)" } contact = {"@harsh123 (class)" }/>
//         </div>
//     )
// }

export default About;