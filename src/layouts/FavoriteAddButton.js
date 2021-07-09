import React from "react";
import FavoriteJobPostingService from "../services/FavoriteJobPostingService";
import { Button, Icon } from "semantic-ui-react";
import { toast } from "react-toastify";

export default function FavoriteAddButton({ jobPostingId }) {
  const handleAddFavorite = (jobPostingId) => {
    let favoriteJobPostingService = new FavoriteJobPostingService();
    favoriteJobPostingService.addFavorites(1, jobPostingId).then((result) => {
      toast.success(result.data.message);
    });
  };

 
  return (
    <Button as="div" labelPosition="right" onClick={()=>{handleAddFavorite(jobPostingId)}}>
    <Button color="red">
      <Icon name="heart" />
      Favorilere Ekle
    </Button>
  </Button>
  );
}
