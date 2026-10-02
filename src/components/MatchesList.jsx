import React from 'react';
import MatchCard from './MatchCard.jsx';

// MatchesList reçoit le tableau "matches" via les Props
function MatchesList({ matches }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {matches.map((match, index) => (
        // On affiche un MatchCard pour chaque match et on transmet ses infos via Props
        <MatchCard
          key={index}
          team1={match.team1}
          team2={match.team2}
          logo1={match.logo1}
          logo2={match.logo2}
          score={match.score}
          date={match.date}
          heure={match.heure}
          status={match.status}
        />
      ))}
    </div>
  );
}

export default MatchesList;
