import React from "react";

/**
 * NOTE
 *  - to use css modules we import our styles as follows
 *  - our styles defined in modules.css can be accessed via obj.key
 */
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
