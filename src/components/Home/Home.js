import Button from "components/UI/Button/Button";
import React from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={props.onOtherStateClick}>{props.otherStateValue}</Button>
    </Card>
  );
};

export default Home;
