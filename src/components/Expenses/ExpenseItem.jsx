import "../Expenses/ExpenseItem.css";
import ExpensiveDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ expenses }) => {
  return (

    <>
      {expenses.map(expense => {
        return(
          <Card className="expense-item">
            <ExpensiveDate date={ expense.date }/>
            <div className="expense-item__description">
              <h2>{ expense.title }</h2>
              <div className="expense-item__price">{`R$${expense.amount}`}</div>
            </div>
          </Card>
        );
      
      })}
    </>
  );
}

export default ExpenseItem;