import "./ExpenseItem.css";
import ExpensiveDate from "./ExpenseDate";

const ExpenseItem = ({ expenses }) => {
  return (

    <>
      {expenses.map(expense => {
        return(
          <div className="expense-item">
            <ExpensiveDate date={ expense.date }/>
            <div className="expense-item__description">
              <h2>{ expense.title }</h2>
              <div className="expense-item__price">{`R$${expense.amount}`}</div>
            </div>
          </div>
        );
      
      })}
    </>
  );
}

export default ExpenseItem;