import React from 'react';
import { Container } from 'react-bootstrap';
import NavbarComp from './components/NavbarComp.jsx';
import PlayersList from './components/PlayersList.jsx';
import MatchesList from './components/MatchesList.jsx';
import Footer from './components/Footer.jsx';

import ronaldinhoImg from './ronaldinho.jfif';
import messiImg from './messi.jfif';
import lewandowskiImg from './lewandowski.jfif';
import yamalImg from './yamal.jfif';

function App() {
  // Exercice 2 : tableau de joueurs
  const players = [
    {
      name: 'Ronaldinho',
      team: 'FC Barcelona',
      nationality: 'Brésil',
      jerseyNumber: 10,
      age: 26,
      image: ronaldinhoImg,
    },
    {
      name: 'Lionel Messi',
      team: 'FC Barcelona',
      nationality: 'Argentine',
      jerseyNumber: 30,
      age: 19,
      image: messiImg,
    },
    {
      name: 'Robert Lewandowski',
      team: 'FC Barcelona',
      nationality: 'Pologne',
      jerseyNumber: 9,
      age: 35,
      image: lewandowskiImg,
    },
    {
      name: 'Lamine Yamal',
      team: 'FC Barcelona',
      nationality: 'Espagne',
      jerseyNumber: 19,
      age: 17,
      image: yamalImg,
    },
  ];

  // Exercice 3 - Étape 2 : tableau de matchs
  const matches = [
    {
      team1: 'FC Barcelona',
      team2: 'Real Madrid',
      logo1: 'https://ui-avatars.com/api/?name=FCB&background=004d98&color=fff&rounded=true',
      logo2: 'https://ui-avatars.com/api/?name=RM&background=ffffff&color=000&rounded=true',
      score: '3 - 2',
      date: '12/10/2026',
      heure: '21:00',
      status: 'Terminé',
    },
    {
      team1: 'PSG',
      team2: 'Bayern Munich',
      logo1: 'https://ui-avatars.com/api/?name=PSG&background=001e50&color=fff&rounded=true',
      logo2: 'https://ui-avatars.com/api/?name=BAY&background=dc052d&color=fff&rounded=true',
      score: '1 - 1',
      date: '24/09/2026',
      heure: '20:45',
      status: 'En direct',
    },
    {
      team1: 'Manchester City',
      team2: 'Liverpool',
      logo1: 'https://ui-avatars.com/api/?name=MC&background=6cabdd&color=000&rounded=true',
      logo2: 'https://ui-avatars.com/api/?name=LIV&background=c8102e&color=fff&rounded=true',
      score: '-- : --',
      date: '28/09/2026',
      heure: '18:30',
      status: 'À venir',
    },
  ];

  return (
    <>
      <NavbarComp />
      <Container>
        <section id="players" className="mb-5">
          <h2 className="text-center mb-4">Players</h2>
          {/* Le tableau "players" est transmis à PlayersList via les Props */}
          <PlayersList players={players} />
        </section>

        <section id="matches" className="mb-5">
          <h2 className="text-center mb-4">Matches</h2>
          {/* Le tableau "matches" est transmis à MatchesList via les Props */}
          <MatchesList matches={matches} />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;