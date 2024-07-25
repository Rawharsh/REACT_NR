 import RestaurantCard from "./RestaurantCard";
 import { useState } from "react";
 import { resList } from "../utils/mockData";




const Body = ()=>{

 
   //   LOCAL STATE VARIABLE ---SUPER POWERFULL VARIABLE
   
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
 
     




    return (
         <div className="body">
          <div className="filter"> 
            <button className="filter-btn" 
            onClick={() => {
                
             const   filterList = listOfRestaurants.filter(
                    (res) => res.avgRating > 4
                );

                console.log(listOfRestaurants);
                console.log("button was clicked");
                setListOfRestaurants(filterList);

             }}
            
            >
                Top Rated Restaurant
            </button>
          </div>
           <div className="res-container">
             
             {
                listOfRestaurants.map((restaurant) => (
                      <RestaurantCard  key = {restaurant.id} resData = {restaurant} />
                ))
             }
              
               
            
           </div>
         </div>
    )
}


export default Body;