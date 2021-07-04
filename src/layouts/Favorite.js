import React,{ useState, useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react';
// import { useSelector } from 'react-redux'
// import { useDispatch } from "react-redux";
// import { removeFromFavorite } from "../store/actions/favoriteActions";

import FavoriteJobPostingService from "../services/FavoriteJobPostingService"
export default function Favorite() { 

    // const {favoriteItems} = useSelector(state => state.favorite)
    // const dispatch = useDispatch()

    // const removeFavorite = (favoriteJobPosting)=>{
    //     dispatch(removeFromFavorite(favoriteJobPosting))
    // }

    const [favorites, setFavorites] = useState([]);

useEffect(()=>{
    let favoriteJobPostingService = new FavoriteJobPostingService();
    favoriteJobPostingService.getFavorites().then(result=>setFavorites(result.data.data))
},[])

    return (
        <div>
           <Dropdown pointing="top right" text="Favori İlanlarım">
            <Dropdown.Menu>
                {
                    favorites.map((favoriteJobPosting)=>(
                        <Dropdown.Item key={favoriteJobPosting.id}>
                            {favoriteJobPosting.jobPosting.jobTitle.title} - {favoriteJobPosting.jobPosting.workingTimes.type} &nbsp;
                        </Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
       </Dropdown>
        </div>
    )
}
