import "./ExpensesFilter.css";

const ExpensesFilter = ({ onChangeFilter, selected }) => {
  const dropdownChangeHandler = (event) => {
    const year = event.target.value;
    onChangeFilter(year);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} value={selected}>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
