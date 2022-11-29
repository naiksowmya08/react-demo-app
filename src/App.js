import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ExpenseMain from './Components/ExpenseMain';
import ExpenseFilter from './Components/ExpenseFilter';
import NewItem from './Components/NewItem/NewItem';

let ExpenseArr = [
    {
        name: "item1",
        price: 200,
        date: "2021-06-06",
        id: 1
    },
    {
        name: "item2",
        price: 300,
        date: "2020-02-08",
        id: 2
    },
    {
        name: "item3",
        price: 500,
        date: "2019-02-02",
        id: 3
    }
];
function App() {
    // const outborder = {
    //     border: '5px solid #17bfcc',
    // };

    const [DynamicArr, SelectedArr] = useState(ExpenseArr);
    
    function NewExpenseArr(DataNew) {
        ExpenseArr = [DataNew, ...ExpenseArr];
        SelectedArr(prevState => {
            return [DataNew, ...DynamicArr]
        })
    }

    function SelectFunc(ParseValue) {
        let result = ExpenseArr.filter(({ date }) =>
            ParseValue === +date.slice(0, 4) 
        );
        SelectedArr(result);
    }
  return (
      <div className="content">

          <div className="container">
              <NewItem newDataArr={NewExpenseArr}/>
              <h2 className="mb-5">Expense Table</h2>
              <ExpenseFilter NewSelectValue={SelectFunc}></ExpenseFilter>
              <div className="table-responsive">

                  <table className="table custom-table table-striped">
                      <thead>
                          <tr>
                              <th scope="col">Order Name</th>
                              <th scope="col">Price</th>
                              <th scope="col">Date</th>
                          </tr>
                      </thead>
                      
                          <ExpenseMain dataArr={DynamicArr}></ExpenseMain>
                     
                  </table>
              </div>
              </div>
      </div>
  );
}

export default App;
