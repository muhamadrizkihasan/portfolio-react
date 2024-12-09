import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PlaceCard from './PlaceCard';

const PlaceList = ({ places }) => {
  return (
    <Row>
      {places.map(place => (
        <Col key={place.id} md={4} className="mb-4">
          <PlaceCard place={place} />
        </Col>
      ))}
    </Row>
  );
};

export default PlaceList;
