import { IMG_URL } from "../utils/constants"


const styleCard = {
    backgroundColor : '#F0F0F0',
}





const RestaurantCard  = (props)=>{
    // console.log(props)
    const {resData} = props;
   // console.log(resData);

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData;


    return(
          <div className="res-card" style={styleCard}>
                <img className="res-logo" src={IMG_URL+cloudinaryImageId}></img>
               <h3>{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{avgRating} stars</h4>
               <h4>{costForTwo}</h4>
               <h4>{sla.deliveryTime} minutes</h4>

          </div>
    )
}



export default RestaurantCard