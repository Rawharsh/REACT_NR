import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";


const useRestaurantMenu = (resId)=>{

    const  [resInfo,SetResInfo] = useState([]);

    useEffect(()=>{
          fetchdata();
    },[])

    const fetchdata = async()=>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);

        SetResInfo(json.data);
        
    }


    return resInfo;
}

export default useRestaurantMenu