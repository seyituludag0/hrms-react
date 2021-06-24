import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Label, Icon, } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { removeFromFavorite } from "../store/actions/favoriteActions";

export default function Favorite() { 

    const {favoriteItems} = useSelector(state => state.favorite)
    const dispatch = useDispatch()

    const removeFavorite = (favoriteJobPosting)=>{
        dispatch(removeFromFavorite(favoriteJobPosting))
    }
{/* <Link to={`/jobposting/${jobPosting.id}`}>
                                {jobPosting.jobTitle.title}
                              </Link> */}
    return (
        <div>
       <Dropdown pointing="top right" text="Favori İlanlarım">
            <Dropdown.Menu>
                {
                    favoriteItems.map((favoriteJobPosting)=>(
                        <Dropdown.Item key={favoriteJobPosting.id}>
                            {favoriteJobPosting.jobPosting.jobTitle.title} - {favoriteJobPosting.jobPosting.workingTimes.type} &nbsp;
                             <Icon name="heartbeat" onClick={()=>{removeFavorite(favoriteJobPosting)}} />
                        </Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
       </Dropdown>
        </div>
    )
}
