import React from "react";
import "./userDetail.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PieChart } from "react-minimal-pie-chart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TodayIcon from "@mui/icons-material/Today";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ProgressBar from "../progressBar/progressBar";
import { styled } from "@mui/material/styles";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Moment from "moment";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
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

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

function fun(id, bool) {
  if (!bool) {
    return (
      <>
        <a href={`/${id}/workout`} className="arrow">
          <div>
            <ArrowForwardIosIcon style={{ color: "white" }} />
          </div>
        </a>
      </>
    );
  } else {
    return (
      <>
        <a href={`/${id}/workout`} className="arrow-exc">
          <div>
            <PriorityHighIcon style={{ color: "white" }} />
          </div>
        </a>
      </>
    );
  }
}

function perfDate(data, bool) {
  if (bool) {
    return (
      <div className="end-date">
        <TodayIcon className="end-icon" fontSize="large" />
        <div className="end-text">{data.performedDate}</div>
      </div>
    );
  } else {
    return (
      <div className="end-date-error">
        <TodayIcon className="end-icon" fontSize="large" />
        <div className="end-text">{data.performedDate}</div>
      </div>
    );
  }
}

export default function User({ data }) {
  var date = Moment(data.performDateJSON);
  var now = Moment();
  var bool = 0;
  if (now < date) {
    bool = 1;
  } else {
    bool = 0;
  }
  return (
    <div className="user-details">
      <img className="user-image " src={data.img} alt="" />

      <div className="fun_user_name user-name">
        <text className="userName">{data.name} </text>
        <br />
        <text className="userMail">{data.mail} </text>
      </div>

      <div style={{ width: 100, height: 110 }} className="fun_user walk-dia">
        <CircularProgressbar
          value={data.stepsWalked}
          maxValue={data.stepsTarget}
          text={data.stepsWalked}
        />
      </div>

      <div className="mid_user_walk_target fun_user_walk_target mid_user">
        <text className="target">{kFormatter(data.stepsTarget)}</text>
        <br />
        target
      </div>

      <div className="fun_user_date mid_user_date">
        <div className="start-date">
          <CalendarTodayIcon className="start-icon" fontSize="large" />
          <div className="start-text">{data.scheduledDate}</div>
        </div>

        {perfDate(data, bool)}
      </div>

      {fun(data.userid, data.feedback)}

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
        <div
          className="fun_user_cal cal-dia"
          style={{ width: 100, height: 110 }}
        >
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

      <div className="mid_user_walk_target fun_user_walk_target mid_user">
        <text className="target">{kFormatter(data.calorieTarget)}</text>
        <br />
        target
      </div>
      <a href={`/${data.userid}/nutrition`} className="arrow">
        <div>
          <ArrowForwardIosIcon style={{ color: "white" }} />
        </div>
      </a>

      <div className="fun_bell-icon">
        <NotificationsNoneIcon style={{ color: "black" }} fontSize="large" />
      </div>
    </div>
  );
}
