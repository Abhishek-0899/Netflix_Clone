import React from "react";
import SavedShow from "../components/SavedShow";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="object-cover w-full h-[400px]"
          src="https://xboxwire.thesourcemediaassets.com/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png"
          alt="/"
        />
        {/* creating overlay */}
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShow />
    </>
  );
};

export default Account;
