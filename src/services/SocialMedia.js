import axios from "axios";

export default class SocialMediaService{
    getSocialMedias(){
        return axios.get("http://localhost:8080/api/socialMedias/getAll")
    }

    update(socialMedia){
        return axios.post("http://localhost:8080/api/socialMedias/update", socialMedia)
    }

}