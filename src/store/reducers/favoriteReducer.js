import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/favoriteActions"
import { favoriteItems } from "../initialValues/favoriteItems"

const initialState = {
    favoriteItems:favoriteItems
}

export default function FavoriteReducer(state=initialState, {type, payload}) {
    
    switch (type) {
        case ADD_TO_FAVORITE:
            let jobPosting = state.favoriteItems.find(f=>f.jobPosting.id===payload.id)
            if (jobPosting) {
                return{
                    ...state,
                }
            } else {
                return{
                    ...state,
                    favoriteItems : [...state.favoriteItems, {jobPosting:payload}]
                }
            }
            case REMOVE_FROM_FAVORITE:
                return{
                    ...state,
                    favoriteItems:state.favoriteItems.filter(f=>f.jobPosting.id!==payload.id)
                }
    
        default:
            return state;
    }

}