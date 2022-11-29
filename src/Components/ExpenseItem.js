import 'bootstrap/dist/css/bootstrap.min.css';
//import './ExpenseSub';
//import ExpenseSub from './ExpenseSub';
import '../App.css';
function ExpenseItem(props) {
    // const outborder = {
    //     border: '5px solid #17bfcc',
    //     margin: '0px 0px 20px 0px'
    // };
    return (
        
            


        <tr>
                <td>
                    {props.title}
                </td>
                <td>{props.price}</td>
                <td>{props.dop}</td>
            
            </tr>
       
    );
}
    export default ExpenseItem;