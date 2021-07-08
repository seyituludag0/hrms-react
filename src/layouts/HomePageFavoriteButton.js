import React from "react";
import FavoriteJobPostingService from "../services/FavoriteJobPostingService";
import { Button, Icon } from "semantic-ui-react";
import { toast } from "react-toastify";
import favorite from "../img/icon/favorite.svg";

export default function HomePageFavoriteButton({ jobPostingId }) {
  const handleAddFavorite = (jobPostingId) => {
    let favoriteJobPostingService = new FavoriteJobPostingService();
    favoriteJobPostingService.addFavorites(1, jobPostingId).then((result) => {
      toast.success(result.data.message);
    });
  };

  return (
    <div>
      <Button
        className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
        style={{ borderRadius: "2rem" }}
      >
        <span
          className="icon-heart"
          onClick={() => {
            handleAddFavorite(jobPostingId);
          }}
        >
          <img src={favorite} width="20px" alt="" />
        </span>
      </Button>
    </div>
  );
}
