import { useState } from "react"


const User = ({name,location,contact})=>{

    const [count1] = useState(0);
    const [count2] = useState(2);


    return (
        <div className="user-card">
            <h1>Count1 : {count1}</h1>
            <h1>Count1 : {count2}</h1>
            <h2>Name :{name}</h2>
            <h3>Location  : {location} </h3>
            <h4>Contact : {contact} </h4>
        </div>
    )
}

export default User