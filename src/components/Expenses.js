import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from './shared/Card';

import './Expenses.css';

function Expenses({expenses}) {
  const [yearPicked, setYearPicked] = useState("2023")

  const onYearChanged = (year) => {
    setYearPicked(year)
    console.log(`${year}`)
  }

  return (
      <Card className="expenses">
        <ExpensesFilter changeYear={onYearChanged} selectedYear={yearPicked} />
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
  )
}

export default Expenses;
