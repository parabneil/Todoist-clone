import React from "react";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

const Sidebar = ({ selectedTab, setselectedTab }) => {
  console.log({ selectedTab });
  return (
    <div className="sidebar">
      <div
        onClick={() => setselectedTab("INBOX")}
        className={selectedTab === "INBOX" ? "active" : ""}
      >
        <FaInbox className="icon" />
        Inbox
      </div>
      <div
        onClick={() => setselectedTab("TODAY")}
        className={selectedTab === "TODAY" ? "active" : ""}
      >
        <FaRegCalendarAlt className="icon" />
        Today
      </div>
      <div
        onClick={() => setselectedTab("NEXT_7")}
        className={selectedTab === "NEXT_7" ? "active" : ""}
      >
        <FaRegCalendar className="icon" />
        Next 7 Days
      </div>
    </div>
  );
};

export default Sidebar;
