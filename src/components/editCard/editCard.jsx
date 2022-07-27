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
import Data from "../../data/data.json";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { styled } from "@mui/material/styles";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ProgressBar from "../progressBar/progressBar";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#333B44",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 1000,
    fontSize: theme.typography.pxToRem(12),
  },
}));

export default function EditCard({ data }) {
  const [walk, setWalk] = useState(data.stepsTarget);
  const [cal, setCal] = useState(data.calorieTarget);

  return (
    <div className="user-details">
      <img className="user_image fun" src={data.img} alt="" />

      <div className="fun-userName user_name">
        <text className="userName">{data.name} </text>
        <br />
        <text className="userMail">{data.mail} </text>
      </div>

      <div
        style={{ width: 100, height: 110 }}
        className="fun-walk walk-dia-edit"
      >
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
          <ArrowForwardIosIcon style={{ color: "white" }} />
        </div>
      </a>
      <HtmlTooltip
        title={
          <React.Fragment>
            <div className="div-hover">
              <div className="div-title">
                <h3 className="title-hover">PROTIEN</h3>
                <h3 className="cal-details">{data.proteinTarget}g</h3>
              </div>

              <ProgressBar
                bgcolor={"#03C6FA"}
                completed={data.proteinConsumed}
              />
            </div>
            <div className="div-hover">
              <div className="div-title">
                <h3 className="title-hover">FATS</h3>
                <h3 className="cal-details">{data.fatTarget}g</h3>
              </div>

              <ProgressBar bgcolor={"#F0C50F"} completed={data.fatConsumed} />
            </div>
            <div className="div-hover">
              <div className="div-title">
                <h3 className="title-hover">CARBS</h3>
                <h3 className="cal-details">{data.carbTarget}g</h3>
              </div>

              <ProgressBar bgcolor={"#F45C84"} completed={data.carbConsumed} />
            </div>
          </React.Fragment>
        }
      >
        <div className="fun-cal cal_dia" style={{ width: 100, height: 110 }}>
          <PieChart
            lineWidth={30}
            animate={true}
            paddingAngle={25}
            rounded={true}
            data={[
              {
                title: "Protein",
                value: data.proteinConsumed,
                color: "#03C6FA",
              },
              { title: "Calorie", value: data.carbConsumed, color: "#F45C84" },
              { title: "Fat", value: data.fatConsumed, color: "#F0C50F" },
            ]}
          />
        </div>
      </HtmlTooltip>

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
          <ArrowForwardIosIcon style={{ color: "white" }} />
        </div>
      </a>

      <div className="fun-bell-icon">
        <NotificationsNoneIcon style={{ color: "black" }} fontSize="large" />
      </div>
    </div>
  );
}
