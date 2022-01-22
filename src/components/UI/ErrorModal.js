import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

function ModalOverlay(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {/* 
        NOTE: Portals allow us to render children into a DOM node that exists outside
        the DOM hierchy of the parent. We need the following in order to use Portals
        1) Our <Component /> 2) The DOM element where our <Component /> will be rendered
        It behaves like a normal React child in every other way, i.e event bubbling 
      */}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
