import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Room } from "../types/room";
const RoomComponent = memo(({ room }: { room: Room }) => {
  const { name, slug, images, price } = room;

  return (
    <article className="room" data-testid="room">
      <div className="room-img-container">
        <img src={require(`../images/${images[0]}`)} alt="single room" />
        <div className="room-price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

export default RoomComponent;
