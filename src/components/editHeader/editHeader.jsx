import React from "react";
import "../header/header.css";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import DoneIcon from '@mui/icons-material/Done';

export default function EditHeader() {
  return (
    <div className="header">
      <h2 className="header-title">
        <DirectionsWalkIcon fontSize="large" />
      </h2>
      <h2 className="header-title text-1">Steps</h2>

      <h2 className="header-title">
        <FitnessCenterIcon fontSize="large" />
      </h2>
      <h2 className="header-title text-2">Workout</h2>

      <h2 className="header-title">
        <RiceBowlIcon fontSize="large" />
      </h2>
      <h2 className="header-title text-3">Nutrition</h2>

      <a className="edit" href="/">
        <div className="edit">
          <h2 className="edit-icon header-title">
            <DoneIcon style = {{color : "white"}} fontSize="large" />
          </h2>
        </div>
      </a>
    </div>
  );
}
