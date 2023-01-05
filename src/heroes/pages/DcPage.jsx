import React from "react";
import HeroList from "../components/HeroList";

const DcPage = () => {
  return (
    <div>
      <div className="w-40 mx-auto">
        <img className="w-full" src="../../assets/logos/dc-logo.jpg" alt="DC logo" />
      </div>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
};

export default DcPage;
