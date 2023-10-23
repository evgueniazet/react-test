import React from "react";
import styles from "./App.module.scss";
import { RandomIconPicker } from "./components/RandomIconPicker.js";

export const App = () => {
  return (
    <div className={styles.app}>
      <RandomIconPicker />
    </div>
  );
};
