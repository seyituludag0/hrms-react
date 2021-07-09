import React from "react";
import FavoriteJobPostingService from "../services/FavoriteJobPostingService";
import { Button, Icon } from "semantic-ui-react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function FavoriteRemoveButton({ jobPostingId }) {
  const handleAddFavorite = (jobPostingId) => {
    let favoriteJobPostingService = new FavoriteJobPostingService();
    favoriteJobPostingService.addFavorites(1, jobPostingId).then((result) => {
      toast.success(result.data.message);
    });
  };

  // return (
  //   <div>
  //     <Button
  //       as="div"
  //       labelPosition="right"
  //       onClick={() => {
  //         handleAddFavorite(jobPostingId);
  //       }}
  //     >
  //       <Button color="red">
  //         <Icon name="heart" />
  //         Favorilerimden çıkar
  //       </Button>
  //     </Button>
  //   </div>
  // );


  return (
     <Button style={{backgroundColor:"yellow"}} basic color="red"
        onClick={() => {
          handleAddFavorite(jobPostingId);
        }}>
                  <Icon name="trash" style={{ fontSize: "1.5rem" }} />
                  Favorilerimden çıkar
                </Button>
  );
}
