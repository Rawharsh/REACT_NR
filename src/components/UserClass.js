import React from "react";



class UserClass extends React.Component {
   
    constructor(props){
        super(props);

        this.state = {
           userInfo : {
              name : "",
              location : "",

           }
        };


        // console.log("Child Constructor");
    }
  

  async  componentDidMount(){
       // console.log("child1 ComponentMount")




               // console.log("parent componentMount")


       const data = await fetch("https://api.github.com/users/Rawharsh");

          const json = await data.json();
          console.log(json);

          this.setState({
            userInfo: json,
          })


    }

    componentWillUnmount(){
   
      console.log("unmount will call");
     
  }

    
   
    render() {
    //    console.log("child Render");
        const {name,location,avatar_url,login} = this.state.userInfo;
        

        

        return (
         <div className="user-card">
        
          
            <h2>Name : {name}</h2>
            <h2>Profile Name : {login}</h2>
            <h3>Location  : {location}</h3>
            <img src={avatar_url}></img>
            
         </div>
        )
    }
   
}

export default UserClass