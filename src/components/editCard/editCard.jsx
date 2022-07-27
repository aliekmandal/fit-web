import React, { useState } from "react";
import "./editCard.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PieChart } from "react-minimal-pie-chart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TodayIcon from "@mui/icons-material/Today";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Data from "../../data/data.json"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

// function kFormatter(num) {
//   return Math.abs(num) > 999
//     ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
//     : Math.sign(num) * Math.abs(num);
// }

export default function EditCard({ data }) {
  const [walk, setWalk] = useState(data.stepsTarget);
  const [cal , setCal] = useState(data.calorieTarget);

  return (
    <div className="user-details">
      <img
        className="user_image fun"
        src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        alt=""
      />

      <div className="fun-userName user_name">
        <text className="userName">{data.name} </text>
        <br />
        <text className="userMail">{data.mail} </text>
      </div>

      <div style={{ width: 100, height: 110 }} className="fun-walk walk-dia-edit">
        <CircularProgressbar
          value={data.stepsWalked}
          maxValue={data.stepsTarget}
          text={data.stepsWalked}
        />
      </div>

      <div className="user_distance_target fun_user_cal_target mid">
        <div
          className="add-icon"
          onClick={() => {
            setWalk(walk + 500);
            Data[data.userid].stepsTarget = walk + 500;
          }}
        >
          <AddIcon />
        </div>
        <text className="target_">{walk}</text>
        <br />
        target
        <div
          className="remove-icon"
          onClick={() => {
            setWalk(walk - 500);
            Data[data.userid].stepsTarget = walk - 500;
          }}
        >
          <RemoveIcon />
        </div>
      </div>

      <div className="fun-date mid_date">
        <div className="start-date">
          <CalendarTodayIcon className="start-icon" fontSize="large" />
          <div className="start-text">15 Oct</div>
        </div>

        <div className="end_date">
          <TodayIcon className="end-icon" fontSize="large" />
          <div className="end-text">20 Oct</div>
        </div>
      </div>

      <a href={`${data.userid}/workout`} className="arrow_">
        <div>
          <ArrowForwardIosIcon style={{color : "white"}}/>
        </div>
      </a>

      <div className="fun-cal cal_dia" style={{ width: 100, height: 110 }}>
        <PieChart
          lineWidth={30}
          animate={true}
          paddingAngle={25}
          rounded={true}
          data={[
            { title: "Protein", value: data.proteinConsumed, color: "#F5C90F" },
            { title: "Calorie", value: data.carbConsumed, color: "#03C7FC" },
            { title: "Fat", value: data.fatConsumed, color: "#F45C84" },
          ]}
        />
      </div>

      <div className="user_distance_target fun_user_cal_target mid">
        <div
          className="add-icon"
          onClick={() => {
            setCal(cal + 100);
            Data[data.userid].calorieTarget = cal + 100;
          }}
        >
          <AddIcon />
        </div>
        <text className="target_">{cal}</text>
        <br />
        target
        <div
          className="remove-icon"
          onClick={() => {
            setCal(cal - 100);
            Data[data.userid].calorieTarget = cal - 100;
          }}
        >
          <RemoveIcon />
        </div>
      </div>
      <a href={`${data.userid}/nutrtion`} className="arrow_">
        <div>
          <ArrowForwardIosIcon style={{color : "white"}}/>
        </div>
      </a>

      <div className="fun-bell-icon">
          <NotificationsNoneIcon style={{color : "black"}} fontSize="large"/>
      </div>
    </div>
  );
}
