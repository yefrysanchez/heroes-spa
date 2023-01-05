import React from "react";
import HeroList from "../components/HeroList";

const MarvelPage = () => {
  return (
    <div>
      <div className="w-40 h-38 mx-auto">
        <img className="w-full h-full object-cover " src="../../assets/logos/logo-marvel-comics.jpg" alt="Marvel logo" />
      </div>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};

export default MarvelPage;
