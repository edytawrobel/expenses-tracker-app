import React from 'react';
import './ExpensesFilter.css';

function ExpensesFilter({changeYear, selectedYear}) {

  const yearChangeHandler = (event) => {
    changeYear(event.target.value);
    console.log("changed year!");
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <input
          type='number'
          min='1920'
          max='2099'
          step="1"
          value={selectedYear}
          onChange={yearChangeHandler}
          />
        </div>
    </div>
  )
}

export default ExpensesFilter;
