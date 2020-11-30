import React from "react";
import "./Main.css";
import { NavBar, News } from "../../Components";

const { remote } = window.require("electron");
const Main = () => {
  const handleClose = () => {
    remote.dialog
      .showMessageBox(remote.getCurrentWindow(), {
        buttons: ["Yes", "No", "Cancel"],
        cancelId: 2,
        defaultId: 0,
        message: "Are you sure you want to close this  Crisp News App?",
        title: "Closing  Crisp News App ",
        checkboxChecked: false,
        checkboxLabel: "Do not ask me again.",
      })
      .then((response) => {
        if (response.response === 0) {
          remote.app.quit();
        } else {
          remote.app.focus();
        }
      });
  };
  return (
    <div className="main">
      <NavBar />
      <News />
      <button className="main__close" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default Main;
