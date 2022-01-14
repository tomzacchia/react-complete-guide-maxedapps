import "./Card.css";

/* 
  ExpenseDate and ExpenseItemsContainer both have the same 
  styling on their root divs: border-radius and box shadow.
  As such we will use Card has a wrapper that already have these
  stylings, DRY.
*/
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
