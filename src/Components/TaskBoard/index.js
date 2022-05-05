import React from "react";
import styles from "./index.module.css";

export default function ProjectCards() {
  return (
    <div className={styles.container}>
      <div className={styles.list}>This is a Task List</div>
      <div className={styles.list}>This is a Task List</div>
      <div className={styles.list}>This is a Task List</div>
      <div className={styles.list}>This is a Task List</div>
    </div>
  );
}
