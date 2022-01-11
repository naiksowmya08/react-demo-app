import 'bootstrap/dist/css/bootstrap.min.css';
//import './ExpenseSub';
import ExpenseSub from './ExpenseSub';
function ExpenseItem(props) {
    const outborder = {
        border: '5px solid #17bfcc',
        margin: '0px 0px 20px 0px'
    };
    return (
        <div>
            <div className="container">
                <div className="row" style={outborder}>
                    <div className="col-md-4 divStyle">
                        <p>{props.title}</p>
                    </div>
                    <div className="col-md-4 divStyle">
                        <p>{props.price}</p>
                    </div>
                    <div className="col-md-4 divStyle">
                        <p>{props.dop}</p>
                    </div>
                    <ExpenseSub/>
                </div>
            </div>

        </div>
    );
}
    export default ExpenseItem;