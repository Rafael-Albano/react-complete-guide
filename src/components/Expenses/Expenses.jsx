import ExpenseItem from "../Expenses/ExpenseItem";
import '../Expenses/Expenses.css';
import Card from "../UI/Card";
const Expenses = ({ expenses }) => {
    return(
			<Card className="expenses">
				<ExpenseItem expenses={expenses}/>
			</Card>
    )
}

export default Expenses;