import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ExpenseItem from './Components/ExpenseItem';
function App() {
    const outborder = {
        border: '5px solid #17bfcc',
    }
    const ExpenseArr = [
        {
            name: "item1",
            price: 200,
            date: "20-10-2021"
        },
        {
            name: "item2",
            price: 300,
            date: "20-11-2021"
        },
        {
            name: "item3",
            price: 500,
            date: "20-10-2021"
        }
    ]
  return (
      <div>
          <ExpenseItem title={ExpenseArr[0].name} price={ExpenseArr[0].price} dop={ExpenseArr[0].date} />
          <ExpenseItem title={ExpenseArr[1].name} price={ExpenseArr[1].price} dop={ExpenseArr[1].date} />
          <ExpenseItem title={ExpenseArr[2].name} price={ExpenseArr[2].price} dop={ExpenseArr[2].date} />
      </div>
  );
}

export default App;
