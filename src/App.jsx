import React, { useState, setState } from 'react';
import Article from './components/Article'
import Personnage from "./components/Personnage"

const App = () => {

  const [personnages, setPersonnages] = useState([
    {
      nom: "John",
      prenom: "ny",
      age: 34,
      commune: "Bruxelles",
    },
    {
      nom: "Walter",
      prenom: `O'brian`,
      age: 22,
      commune: "Bruxelles",
    },
    {
      nom: "Jean",
      prenom: "Pierre",
      age: 54,
      commune: "Ath",
    }
  ])

  const [listePresence, setListePresence] = useState([
    {
      nom: "Alexis"
    },
    {
      nom: "Farhad"
    },
    {
      nom: "Cactus"
    },
    {
      nom: "Ilyas"
    },
    {
      nom: "Kevin"
    }
  ])

  let rename = () => setPersonnages([
    {
      nom: "Jeqsdan",
      prenom: "Pieqsdrre",
      age: 54,
      commune: "Aqsdth",
    },
    {
      nom: "Johqsdn",
      prenom: "nsqdy",
      age: 34,
      commune: "Bruxeqsdlles",
    },
    {
      nom: "Waltqsder",
      prenom: `O'briqsdan`,
      age: 22,
      commune: "Bruqsdxelles",
    },
  ])

  return (
    <div>
      <Article listePresence={listePresence}/>
      <Personnage personnages={personnages} rename={rename}/>
    </div>
  );
};

export default App;