import ExpenseItem from './ExpenseItem';

function ExpenseMain(props) {
	return (
		<tbody>
			{props.dataArr.map(ItemSelect => <ExpenseItem key={ItemSelect.id} title={ItemSelect.name} price={ItemSelect.price} dop={ItemSelect.date} ></ExpenseItem>)}
		</tbody>
			
	);
}

export default ExpenseMain;