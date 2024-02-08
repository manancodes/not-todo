import React from "react";
import styles from "./index.module.css";

export default function SideMenu() {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>Not ToDo.</p>
      <div className={styles.profilepic}>
        {new Date().toLocaleDateString("en-us", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </div>
    </div>
  );
}
