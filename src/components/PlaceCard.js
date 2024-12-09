import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PlaceCard = ({ place }) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={place.image}
        alt={place.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{place.name}</Card.Title>
        <Card.Text>{place.description}</Card.Text>
        <Link to={`/detail/${place.id}`}>
          <Button variant="primary">Lihat Detail</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PlaceCard;
