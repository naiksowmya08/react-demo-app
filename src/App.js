import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ExpenseMain from './Components/ExpenseMain';
import NewItem from './Components/NewItem/NewItem';

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
    ];
    function NewExpenseArr(props) {
        const NewAddExpense = {
            ...ExpenseArr,
        
            name: props.name,
                price: props.price,
                    date: props.date

             
    }
        console.log(NewAddExpense);
    }
  return (
      <div class="content">

          <div class="container">
              <NewItem newDataArr={NewExpenseArr}/>
              <h2 class="mb-5">Expense Table</h2>

              <div class="table-responsive">

                  <table class="table custom-table table-striped">
                      <thead>
                          <tr>
                              <th scope="col">Order Name</th>
                              <th scope="col">Price</th>
                              <th scope="col">Date</th>
                          </tr>
                      </thead>
                      
                          <ExpenseMain dataArr={ExpenseArr}></ExpenseMain>
                     
                  </table>
              </div>
              </div>
      </div>
  );
}

export default App;
