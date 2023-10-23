import React, { useState } from "react";
import styles from "../App.module.scss";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { transformString } from "../utils/transformString";

library.add(fas);

export const RandomIconPicker = () => {
  const [randomIcon, setRandomIcon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      const icons = Object.keys(fas);
      const randomIconName = icons[Math.floor(Math.random() * icons.length)];
      const newRandomIconName = transformString(randomIconName);
      setRandomIcon(newRandomIconName);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        {randomIcon && (
          <FontAwesomeIcon className={styles.icon} icon={randomIcon} />
        )}
      </div>

      <Button
        className={styles.button}
        variant="contained"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Click here"}
      </Button>
    </div>
  );
};
