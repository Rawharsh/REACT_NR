import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import { resList } from "../utils/mockData";
import CaraousalCard from "./CaraousalCard";
import Shimmer from "./Shimmer";
import BestPlaces from "./BestPlaces";
import BestCuisines from "./BestPlaces";
import { Link } from "react-router-dom";

const Body = () => {
  //   LOCAL STATE VARIABLE ---SUPER POWERFULL VARIABLE

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);

  const [caraousalData,setCaraousalData] = useState([]);
  const [bestPlaces,setBestPlaces]=useState([]);
  const [bestCuisines,setBestCuisines]=useState([]);

  const [searchText, setSearchtext] = useState("");

  console.log("body rendered");

  useEffect(() => {
    // console.log("useeffect called ");
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data  = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9352403&lng=77.624532");
    // https://www.swiggy.com/mapi/homepage/getCards?lat=25.147072&lng=75.857678

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.2101232&lng=77.97280889999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN"
    );
    // console.log(data);

    const json = await data.json();

    // console.log(json.data.cards[4].card.card);
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1].info.id);
    //  console.log(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
   console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

     setCaraousalData(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);


      console.log(json?.data?.cards[6]?.card?.card?.brands);

      setBestPlaces(json?.data?.cards[6]?.card?.card?.brands);
      setBestCuisines(json?.data?.cards[7]?.card?.card?.brands);

    //  setBestPlaces(json?.data?.cards[6]?.card?.card);

    // const data1 =  json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
  };

  //conditional rendering

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            onClick={() => {

              // setListOfRestaurants(data1);

              //filter the restaurant and update the UI
             
              console.log(searchText);
          const filteredRestaurant = listOfRestaurants.filter(
            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
          );

          setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
         
            // console.log(filterList);
            console.log(listOfRestaurants);
            console.log("button was clicked");
            setFilteredRestaurant(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="caraousal-container">
         {caraousalData.map((data)=>(
          
            <CaraousalCard key={data.id} cardData = {data} />

         ))}

      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
      <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} ><RestaurantCard  resData={restaurant.info} /> </Link>    
        ))}
      </div>

    
      <h1 className="besth1">Best Places to Eat Across Cities</h1>
      <div className="bestPlace-container">
       
       
        {
        
        bestPlaces.map((place) => (
          <BestPlaces resData={place} />
        ))}
      </div>

   
      <h1 className="besth1" >Best Cuisines Near Me</h1>

      <div className="bestCuisines-container">
       
        {
        
        bestCuisines.map((cuisine) => (
          <BestCuisines resData={cuisine} />
        ))}
      </div>


    </div>
  );
};

export default Body;
