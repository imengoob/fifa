import React from 'react';
import { Card, Badge } from 'react-bootstrap';

// MatchCard reçoit les infos du match via les Props
function MatchCard({ team1, team2, logo1, logo2, score, date, heure, status }) {
  const statusVariant =
    status === 'En direct' ? 'danger' : status === 'Terminé' ? 'secondary' : 'success';

  return (
    <Card style={{ width: '18rem' }} className="m-2 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Badge bg={statusVariant}>{status}</Badge>
          <small className="text-muted">{date} - {heure}</small>
        </div>
        <div className="d-flex justify-content-between align-items-center text-center">
          <div className="flex-fill">
            <img src={logo1} alt={team1} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div>{team1}</div>
          </div>
          <h4 className="mx-2">{score}</h4>
          <div className="flex-fill">
            <img src={logo2} alt={team2} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div>{team2}</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MatchCard;
