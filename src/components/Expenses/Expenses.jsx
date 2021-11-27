import ExpenseItem from "../Expenses/ExpenseItem";
import '../Expenses/Expenses.css';
import Card from "../UI/Card";
const Expenses = ({ expenses }) => {
    return(
      <Card className="expenses">
        { expenses.map((expense) => {
          return(
            
              <ExpenseItem expense={expense}/>
            
          )  
        })}
      </Card>
    )
}

export default Expenses;