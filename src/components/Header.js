import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = ()=>{

    
     // const btnName = "Login";
      const [btnName,setBtnName] = useState("Login");

      const onlineStatus = useOnlineStatus();
   
      //use of useEffect and also the dependency array 
      // useEffect(()=>{
      //       console.log("hello from heaeder");
      // },[btnName]);

    return (
           <div className="header">
                <div className="logo-container">
                     <img className="logo" src={LOGO_URL}  />
                </div>

                <div className="nav-items">

                      <ul>
                        <li>
                          Online staus : {onlineStatus ? "🟢" : "🔴"}
                        </li>
                            <li>
                              <Link>Home</Link></li>
                            <li>
                              <Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li>Cart</li>
                            <button className="login" onClick={()=>{
                            btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
                              console.log(setBtnName);
                            }
                            }>{btnName}</button>
                      </ul>

                </div>
           </div>
    );
};

export default Header;