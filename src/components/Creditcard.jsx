import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import auth from "../FirebaseConfig";
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
        <span className="text-gray-300 font-sans font-medium">Dr Rise</span>
        {/* <img src="images/chip.png" alt="" className="chip" /> */}
      </header>
      <div>
        <h5 className="number m-0 tracking-wider text-sm font-medium"> {data?.userId}</h5>
        <span className="text-gray-400 m-0 font-sans text-sm font-medium">Client Id</span>
      </div>

      <div className="card-details">
        <div className="name-number">
          <h5 className="name font-normal">{data?.executive}</h5>
          <h5 className="holder text-gray-400 font-semibold text-sm">EXECUTIVE</h5>
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
