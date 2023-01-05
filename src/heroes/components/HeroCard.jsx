import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImg = `/assets/heroes/${id}.jpg`;

  return (
    <div className="max-w-sm h-fit mb-8 group rounded overflow-hidden shadow-lg">
      <img className="w-full group-hover:scale-105 transition-transform duration-300" src={heroImg} alt={superhero} />
      <div className="px-6 py-4">
        <h2 className="font-bold mt-4 text-xl text-center mb-2">{superhero}</h2>
        <p className="text-gray-700 mt-4 text-center  text-base">{alter_ego}</p>
        <p className="text-gray-400 text-center  text-base">{first_appearance}</p>
        <Link to={`/hero/${id}`} className="w-full inline-block mt-4 text-center  px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-700 rounded-md hover:bg-slate-500 focus:outline-none focus:bg-slate-900">
          More Info
        </Link>
      </div>
    </div>
  );
};

export default HeroCard;
