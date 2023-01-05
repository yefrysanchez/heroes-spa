import React from "react";
import HeroList from "../components/HeroList";

const DcPage = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">DC</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
};

export default DcPage;
