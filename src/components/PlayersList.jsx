import React from 'react';
import PlayerCard from './PlayerCard.jsx';

// PlayersList reçoit le tableau "players" via les Props
function PlayersList({ players }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {players.map((player, index) => (
        // On appelle PlayerCard pour chaque joueur et on transmet ses infos via Props
        <PlayerCard
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          image={player.image}
        />
      ))}
    </div>
  );
}

export default PlayersList;
