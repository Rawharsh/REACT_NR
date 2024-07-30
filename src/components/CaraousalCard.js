import { IMG_URL } from "../utils/constants";



const CaraousalCard = (props)=>{
    const {cardData} = props;
   

    const {imageId} = cardData;

    return(
         <div className="card-div">
              <img className="carousal-logo" src={IMG_URL+imageId}></img>
         </div>
  )

}

export default CaraousalCard