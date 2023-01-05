import React from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublishers";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul className="mt-10 border place-items-center grid gap-4 grid-cols-3 grid-rows-4">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id}{...hero}/>
      })}
    </ul>
  );
};

export default HeroList;
