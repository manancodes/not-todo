import React from "react";
import styles from "./index.module.css";

export default function ProjectCards() {
  return (
    <div className={styles.container}>
      <div className={styles.card} style={{ background: "#5CE1E6" }}>
        This is a Project Card
      </div>
      <div className={styles.card} style={{ background: "#FFE270" }}>
        This is a Project Card
      </div>
      <div className={styles.card} style={{ background: "#FF7075" }}>
        This is a Project Card
      </div>
      <div className={styles.card} style={{ background: "#9E86C1" }}>
        This is a Project Card
      </div>
      <div className={styles.card} style={{ background: "#47E5BC" }}>
        This is a Project Card
      </div>
    </div>
  );
}
