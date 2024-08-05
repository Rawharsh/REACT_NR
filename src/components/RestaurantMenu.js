
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";





const RestaurantMenu = () =>{
    //  const [resInfo,SetResInfo] = useState([]);

     const { resId } = useParams();


     // CUSTOM HOOK
     const resInfo = useRestaurantMenu(resId);





    if(resInfo.length===0) return   <Shimmer/> ;


  const {name,cuisines,costForTwoMessage} = resInfo.cards[2].card.card.info;
 // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  const  itemCard  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
// console.log(itemCard);

    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
           {/* {itemCard[0].card.info.name} */}
           <ul>
            {itemCard.map(item =>
                <li key={item.card.info.id}>{item.card.info.name} -Rs {item.card.info.price/100} </li>
            )}
          </ul>
           
       </div>
    )
}

export default RestaurantMenu;