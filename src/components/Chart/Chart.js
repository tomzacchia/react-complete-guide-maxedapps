import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ dataPoints }) {
  const dataPointValue = dataPoints.map((dataPoint) => dataPoint.value);
  const maximumMonthlyExpense = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumMonthlyExpense}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
