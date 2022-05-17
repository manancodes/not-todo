import React from "react";
import styles from "./index.module.css";

export default function SideMenu() {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>Not ToDo.</p>
      <div className={styles.profilepic}></div>
    </div>
  );
}
