import React from "react";
import { useParams, Link } from "react-router-dom";
import getHeroById from "../helpers/getHeroById";
import NotFound from "./NotFound";

const HeroPage = () => {
  const { id } = useParams();

  const hero = getHeroById(id);

  if (!hero) {
    return <NotFound />;
  }

  return (
    <div className="flex justify-center mt-10 mx-auto mb-10">
      <div className="flex flex-col md:flex-row md:max-w-2xl md:mh-96 rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={`/assets/heroes/${id}.jpg`}
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-4xl font-medium mb-2">
            {hero.alter_ego}
          </h5>
          <p className="text-gray-700 text-base mt-4 mb-2">
            <span className="font-bold">Alter Ego:</span> {hero.alter_ego}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <span className="font-bold">Publisher:</span> {hero.publisher}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <span className="font-bold">First Appearance:</span>{" "}
            {hero.first_appearance}
          </p>

          <h5 className="text-gray-700 text-xl font-medium mt-8 mb-2">
            Characters
          </h5>
          <p>{hero.characters}</p>
        </div>
        <button className="mt-5">
          <Link
            to="/"
            className="relative  md:rounded-l-lg p-4 inline-block text-sm font-medium bg-slate-700 text-white focus:outline-none focus:ring"
          >
            Go Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
