import ExpenseItem from './ExpenseItem';

function ExpenseMain(props) {
	return (
		<tbody>
			<ExpenseItem title={props.dataArr[0].name} price={props.dataArr[0].price} dop={props.dataArr[0].date} ></ExpenseItem>
			<ExpenseItem title={props.dataArr[1].name} price={props.dataArr[1].price} dop={props.dataArr[1].date} ></ExpenseItem>
			<ExpenseItem title={props.dataArr[2].name} price={props.dataArr[2].price} dop={props.dataArr[2].date} ></ExpenseItem>
			</tbody>
			
	);
}

export default ExpenseMain;