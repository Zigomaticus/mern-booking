import React from "react";
// Css
import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sing up and we`ll send the best deals to you
      </span>
      <div className="mailInpuyContainer">
        <input type="text" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
