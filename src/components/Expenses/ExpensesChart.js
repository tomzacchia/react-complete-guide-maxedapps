import Chart from "components/Chart/Chart";

function ExpensesChart({ expenses }) {
  const chartDataPoints = sumExpensesByMonth(expenses);

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;

function sumExpensesByMonth(expenses) {
  const chartInitialValue = [
    { label: "Jan", value: "0" },
    { label: "Feb", value: "0" },
    { label: "Mar", value: "0" },
    { label: "Apr", value: "0" },
    { label: "May", value: "0" },
    { label: "Jun", value: "0" },
    { label: "Jul", value: "0" },
    { label: "Sep", value: "0" },
    { label: "Oct", value: "0" },
    { label: "Nov", value: "0" },
    { label: "Dec", value: "0" },
  ];

  for (const expense of expenses) {
    // getMonth() starts at 0 for Jan
    const expenseMonth = expense.date.getMonth();

    chartInitialValue[expenseMonth].value += expense.amount;
  }

  return chartInitialValue;
}
