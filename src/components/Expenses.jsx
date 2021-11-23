import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
const Expenses = ({ expenses }) => {
    return(
			<div className="expenses">
				<ExpenseItem expenses={expenses}/>
			</div>
    )
}

export default Expenses;