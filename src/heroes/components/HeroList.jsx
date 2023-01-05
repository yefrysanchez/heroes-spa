import React from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublishers";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul className="mt-10 border place-items-center grid sm:grid-cols-2 sd:gap-4 md:gap-4 md:grid-cols-3 md:grid-rows-4">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id}{...hero}/>
      })}
    </ul>
  );
};

export default HeroList;
