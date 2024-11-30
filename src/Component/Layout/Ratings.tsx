import React from "react";
import ImgStarOutlined from "../../Assets/star-outlined.png";
import ImgStarFilled from "../../Assets/star-filled.png";

interface RatingsProps {
  rating: number;
}

const Ratings: React.FC<RatingsProps> = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div style={{ display: "flex", gap: "var(--size-5)" }}>
      {stars.map((star) => (
        <img
          key={star}
          src={star <= rating ? ImgStarFilled : ImgStarOutlined}
          alt="star"
          className="rating-star"
        />
      ))}
    </div>
  );
};

export default Ratings;
