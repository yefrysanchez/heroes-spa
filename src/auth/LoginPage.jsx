import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/", {
      replace: true
    });
  };

  return (
    <div className="relative flex flex-col  bg-black bg-cover  justify-center min-h-screen overflow-hidden bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] ">
      <div className="w-3/5 p-6 m-auto bg-white rounded-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-slate-700 uppercase">
          Log in
        </h1>
        <div className="mt-6">
          <button onClick={onLogin} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-700 rounded-md hover:bg-slate-500 focus:outline-none focus:bg-slate-900">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
