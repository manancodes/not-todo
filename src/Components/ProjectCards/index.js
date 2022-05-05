import React from "react";
import styles from "./index.module.css";

export default function ProjectCards() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>This is a Project Card</div>
      <div className={styles.card}>This is a Project Card</div>
      <div className={styles.card}>This is a Project Card</div>
      <div className={styles.card}>This is a Project Card</div>
      <div className={styles.card}>This is a Project Card</div>
    </div>
  );
}
