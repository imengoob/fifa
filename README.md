# FIFA App - TP N°2 React (Components, Props et affichage dynamique)

## Installation

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichée (ex: http://localhost:5173).

## Structure

```
src/
  components/
    PlayerCard.jsx     -> Exercice 1 : affiche un joueur (reçoit ses infos via Props)
    PlayersList.jsx     -> Exercice 2 : reçoit le tableau "players" via Props, .map() -> PlayerCard
    MatchCard.jsx        -> Exercice 3 (étape 1) : affiche un match via Props
    MatchesList.jsx       -> Exercice 3 (étape 2) : reçoit "matches" via Props, .map() -> MatchCard
    NavbarComp.jsx         -> barre de navigation
    Footer.jsx               -> pied de page
  App.jsx                     -> Exercice 4 : contient les tableaux players / matches
                                  et assemble Navbar + Players + Matches + Footer
```

## Props utilisées

- `PlayerCard` reçoit : `name`, `team`, `nationality`, `jerseyNumber`, `age`, `image`
- `PlayersList` reçoit : `players` (tableau), le parcourt avec `.map()` et transmet chaque
  joueur à `PlayerCard` via les Props.
- `MatchCard` reçoit : `team1`, `team2`, `logo1`, `logo2`, `score`, `date`, `heure`, `status`
- `MatchesList` reçoit : `matches` (tableau), le parcourt avec `.map()` et transmet chaque
  match à `MatchCard` via les Props.

Les images des joueurs et logos d'équipes utilisées sont générées automatiquement (avatars
de substitution) — vous pouvez les remplacer par vos propres images dans `App.jsx`.
