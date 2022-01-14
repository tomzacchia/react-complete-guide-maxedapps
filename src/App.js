import ExpenseItemsContainer from "components/ExpenseItemsContainer";
import { React } from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  /*
    we could write our component using React.createElement
    however JSX gets compiled to JS before runtime (see below)
    this is why we cant return 2 root elements
  */

  // .createElement(type, [props], [...children])
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, `Let's get started!`),
  //   React.createElement(ExpenseItemsContainer, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* props are added via attributes on custom components like HTML attributes */}
      <ExpenseItemsContainer expenses={expenses} />
    </div>
  );
}

export default App;

/*          
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
          children: "Let's get started!"
      }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7
      }, this), 
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_ExpenseItemsContainer__WEBPACK_IMPORTED_MODULE_0__["default"], {
          expenses: expenses
      }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
      }, this)]
  }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
  }, this);
*/
