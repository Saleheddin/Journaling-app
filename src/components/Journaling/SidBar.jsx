import React, { useState } from "react";

const SidBar = ({ currentSection, onSectionChange }) => {
  const [iscollapsed, setcollapsed] = useState(true);
  return (
    <div className="sidebar">
      <div className="header">
        <p>Journal Menu</p>
        <div className="ml-auto">{iscollapsed ? "<<" : ">>"}</div>
      </div>
      <ul>
        <li
          className={currentSection === "entries" ? "active" : ""}
          onClick={() => onSectionChange("entries")}
        >
          Journal Entries
        </li>
        <li
          className={currentSection === "tasks" ? "active" : ""}
          onClick={() => onSectionChange("tasks")}
        >
          Tasks
        </li>
        <li
          className={currentSection === "notes" ? "active" : ""}
          onClick={() => onSectionChange("tasks")}
        >
          Notes
        </li>
        {/* Add more links for notes, tasks, etc. */}
      </ul>
    </div>
  );
};

export default SidBar;
