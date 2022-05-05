import React from "react";
import styles from "./index.module.css";

import ProjectCards from "../../Components/ProjectCards";
import TaskBoard from "../../Components/TaskBoard";

export default function Home() {
  return (
    <div>
      <p className={styles.GreetingText}>Hello Manan!</p>
      <p className={styles.TasksText}>You've got 3 Tasks Today</p>
      {/* <ProjectCards /> */}
      <TaskBoard />
    </div>
  );
}
