import React from "react";
import HeroList from "../components/HeroList";

const MarvelPage = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">MalverPage</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};

export default MarvelPage;
