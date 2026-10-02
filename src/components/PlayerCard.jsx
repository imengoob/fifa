import React from 'react';
import { Card, Badge } from 'react-bootstrap';

// PlayerCard reçoit toutes les infos du joueur via les Props
function PlayerCard({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <Card style={{ width: '14rem' }} className="m-2 shadow-sm">
      <Card.Img variant="top" src={image} alt={name} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          {name}
          <Badge bg="primary">#{jerseyNumber}</Badge>
        </Card.Title>
        <Card.Text as="div">
          <div><strong>Équipe :</strong> {team}</div>
          <div><strong>Nationalité :</strong> {nationality}</div>
          <div><strong>Âge :</strong> {age} ans</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;
