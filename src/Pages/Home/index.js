import React from "react";
import styles from "./index.module.css";

import ProjectCards from "../../Components/ProjectCards";
import TaskBoard from "../../Components/TaskBoard";

export default function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "16px",
          marginRight: "16px",
        }}
      >
        <div>
          <p className={styles.GreetingText}>Hello Manan!</p>
          <p className={styles.TasksText}>You've got 3 Tasks Today</p>
        </div>
        <div>
          <input></input>
        </div>
      </div>

      <ProjectCards />
      <TaskBoard />
    </div>
  );
}
