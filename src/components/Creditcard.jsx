import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import "./Creditcard.css";
const Creditcard = () => {
  const data = useRouteLoaderData("home");
  console.log(data);
  return (
    <div className="shadow-xl shadow-gray-300 card justify-between h-56">
      <header>
        <span className="logo">
          {/* <img src="images/logo.png" alt="" /> */}
          {/* <h5>Master Card</h5> */}
          <div className="flex justify-center -space-x-4 ">
            <div className=" bg-gray-200/[.20] h-10 w-10 rounded-full"></div>
            <div className=" bg-gray-200/[.20] h-10 w-10 rounded-full"></div>
          </div>
        </span>
        {/* <img src="images/chip.png" alt="" className="chip" /> */}
      </header>

      <h5 className="number tracking-wider font-medium"> {"· · · ·  · · · ·  2030 3020"}</h5>
      <div className="card-details">
        <div className="name-number">
          <h5 className="name font-normal">Robert</h5>
          <h5 className="holder text-gray-400 font-semibold text-sm">CARD HOLDER</h5>
        </div>
        <div className="valid-date">
          <h6 className="text-gray-400 font-semibold text-sm">Withdrawal </h6>
          <h5 className="text-right">{parseInt(data?.monthlyWithdrawal).toString().padStart(2, "0")}</h5>
        </div>
      </div>
    </div>
  );
};

export default Creditcard;
