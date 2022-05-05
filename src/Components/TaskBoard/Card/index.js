import React from "react";
import styles from "./index.module.css";

function Card(props) {
  console.log(props);
  return <div className={styles.card}>{props.text}</div>;
}

export default Card;
