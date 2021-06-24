export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE"
export const REMOVE_FROM_FAVORITE = "REMOVE_TO_FAVORITE"

export function addToFavorite(jobPosting){ 
    return{
        type: ADD_TO_FAVORITE,
        payload:jobPosting
    }
}

export function removeFromFavorite(jobPosting){ 
    return{
        type: REMOVE_FROM_FAVORITE,
        payload:jobPosting
    }
}