import React from "react";
import "./header.css";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

export default function Header() {
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

      <a className="edit" href="/editUser">
        <div className="edit">
          <h2 className="edit-icon header-title">
            <ModeEditOutlineIcon style = {{color : "white"}} fontSize="large" />
          </h2>
        </div>
      </a>
    </div>
  );
}
