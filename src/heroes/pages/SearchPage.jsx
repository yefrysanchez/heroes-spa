import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../components/HeroCard";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1 className="text-3xl text-white py-2 bg-slate-700 text-center font-bold">
        Search
      </h1>
      <div className="flex flex-col">
        <form onSubmit={onSearchSubmit}>
          <div className="mt-5">
            <input
              type="search"
              id="default-search"
              className="block mx-auto relative p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search a hero"
              name="searchText"
              required
              value={searchText}
              onChange={onInputChange}
            />
          </div>
        </form>
        <div className="mx-auto">
          <h3 className="font-bold text-center text-white p-2 rounded mx-auto mt-5 bg-slate-700 text-2xl w-fit">
            Results
          </h3>
          {
            (heroes.length === 0) ? <div className="text-center mt-10">
            <p>There's no results</p>
          </div> : ''
          }

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
          
        </div>
      </div>
    </>
  );
};

export default SearchPage;
