import React,{ useState, useEffect } from 'react'
import FavoriteJobPostingService from "../services/FavoriteJobPostingService"
import { Icon } from 'semantic-ui-react';


export default function FavoriteJobPosting({candidate, jobPosting}) {

const [favorites, setFavorites] = useState({});

// useEffect(()=>{
//     let favoriteJobPostingService = new FavoriteJobPostingService();
//     favoriteJobPostingService.getFavorites().then(result=>console.log(result.data.data))
// },[])

useEffect(()=>{
    let favoriteJobPostingService = new FavoriteJobPostingService();
    favoriteJobPostingService.getByCandidateIdAndJobPostingId(candidate?.id, jobPosting?.id).then((result)=>setFavorites(result.data.data))
    console.log(favorites);
},[])

// useEffect(() => {
//     let favoriteService= new FavoriteService()
//     favoriteService.getByJobSeekerIdAndJobAdvertId(candidate?.id,jobPosting?.id).then((result)=>setFavorite(result.data.data))
//     console.log(favorite);
// }, [])






    return (
        <div>
        {/* <Button.Content  hidden>Favorilere ekle</Button.Content> */}
        {favorites?(
          <Icon
          onClick={() => {
            console.log(jobPosting, candidate);
            let favoritesService = new FavoriteJobPostingService();
            favoritesService
              .delete(candidate?.id, jobPosting?.id)
              .then((result) => console.log(result.data.data));
            window.location.reload(2000)
          }}
          name="fas fa-heart"
          size="big"
          style={{ marginLeft: "-60px",color:"red" }}
        />
        ):(
          <i
                onClick={() => {
                  let values = {
                    //ilk kısımdaki isimlendirme swagger tarafıyla aynı olmalı
                    candidate: candidate,
                    jobPosting: jobPosting,
                  };
                  console.log(jobPosting, candidate);
                  let favoritesService = new FavoriteJobPostingService();
                  favoritesService
                    .add(values)
                    .then((result) => console.log(result.data.data));
                  window.location.reload(2000)
                }}
                className="far fa-2x fa-heart"
                style={{ marginLeft: "-60px",color:"red" }}
              ></i>
        )}
             
        
  </div>
    )
}
