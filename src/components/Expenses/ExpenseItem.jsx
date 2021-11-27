import "../Expenses/ExpenseItem.css";
import ExpensiveDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = ({ expense }) => {

  console.log(expense);
  const [ title, setTitle ] = useState(expense.title);

  const clickHandler = () => {
    setTitle('Title updated')
    console.log(title);
    
    
  }
  return (

    <>
      
      <Card className="expense-item">
        <ExpensiveDate date={ expense.date }/>
        <div className="expense-item__description">
          <h2>{ title }</h2>
          <div className="expense-item__price">{`R$${expense.amount}`}</div>
          <button onClick={clickHandler}>Change Title</button>
        </div>
      </Card>
      
      
    </>
  );
}

export default ExpenseItem;