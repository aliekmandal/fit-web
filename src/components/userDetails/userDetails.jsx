import React from "react";
import Data from "../../data/data.json";
import User from "../userDetail/userDetail";
import EditCard from "../editCard/editCard";
import "./userDetails.css";
import Header from "../header/header";
import EditHeader from "../editHeader/editHeader";

export default function Users({ bool }) {
  if (bool) {
    return (
      <div>
        <Header />
        {Data.map((value) => {
          return <User data={value} />;
        })}
      </div>
    );
  } else {
    return (
      <div>
        <EditHeader />
        {Data.map((value) => {
          return <EditCard data={value} />;
        })}
      </div>
    );
  }
}
