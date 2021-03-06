import React,{ useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
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
},[]


)

    return (
        <div>
           <Dropdown pointing="top right" text="Favori İlanlarım">
            <Dropdown.Menu>
                {
                    favorites.map((favoriteJobPosting)=>(
                        <Dropdown.Item key={favoriteJobPosting.id}>
                            {favoriteJobPosting.jobPosting.city.name} | {favoriteJobPosting.jobPosting.workingTimes.type}  {favoriteJobPosting.jobPosting.jobTitle.title} &nbsp;
                        </Dropdown.Item>
                    ))
                }
                <Dropdown.Item as={NavLink} to="/myfavorites">Favorilerime Git</Dropdown.Item>
            </Dropdown.Menu>
       </Dropdown>
        </div>
    )
}
