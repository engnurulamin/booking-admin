import React, { useContext, useEffect, useState } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext.jsx";

const Sidebar = () => {
  const [active_tab, setActiveTab] = useState(1);
  const { dispatch } = useContext(DarkModeContext);

  useEffect(() => {
    const storedActiveTab = localStorage.getItem("active_tab");
    if (storedActiveTab) {
      setActiveTab(parseInt(storedActiveTab, 10));
    }
  }, []);
  function activeTab(index) {
    setActiveTab(index);
    localStorage.setItem("active_tab", index);
    console.log(active_tab);
  }
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <Link className="logo-link" to="/">
            Booking App
          </Link>
        </span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li
              className={active_tab === 1 ? "is-active" : ""}
              onClick={() => {
                activeTab(1);
              }}
            >
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li
              className={active_tab === 2 ? "is-active" : ""}
              onClick={() => {
                activeTab(2);
              }}
            >
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li
              className={active_tab === 3 ? "is-active" : ""}
              onClick={() => {
                activeTab(3);
              }}
            >
              <StoreIcon className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li
              className={active_tab === 4 ? "is-active" : ""}
              onClick={() => {
                activeTab(4);
              }}
            >
              <CreditCardIcon className="icon" />
              <span>Rooms</span>
            </li>
          </Link>
          <li
            className={active_tab === 5 ? "is-active" : ""}
            onClick={() => {
              activeTab(6);
            }}
          >
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li
            className={active_tab === 6 ? "is-active" : ""}
            onClick={() => {
              activeTab(7);
            }}
          >
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li
            className={active_tab === 7 ? "is-active" : ""}
            onClick={() => {
              activeTab(8);
            }}
          >
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li
            className={active_tab === 8 ? "is-active" : ""}
            onClick={() => {
              activeTab(9);
            }}
          >
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li className={active_tab === 9 ? "is-active" : ""}>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li
            className={active_tab === 10 ? "is-active" : ""}
            onClick={() => {
              activeTab(10);
            }}
          >
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li
            className={active_tab === 11 ? "is-active" : ""}
            onClick={() => {
              activeTab(11);
            }}
          >
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li
            className={active_tab === 12 ? "is-active" : ""}
            onClick={() => {
              activeTab(12);
            }}
          >
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p className="title">THEMES</p>
        <div className="color-container">
          <div
            className="color-option"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="color-option"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
          <div className="color-option"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
