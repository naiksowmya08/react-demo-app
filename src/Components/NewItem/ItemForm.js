import './ItemForm.css';

function ItemForm() {
    return (
        <div className="outBox">
        <form action="#" method="post">
            <h1>Add Order</h1>

            <div class="column">
                <label for="order_name">Order Name</label>
                <input type="text"/>

                <label for="order_price">Price</label>
                <input type="text" />
            </div>

            <div class="column">
                 <label for="dop">Date of purchase</label>
                <input type="date" />


                <button type="submit" >Submit </button>
            </div>

            </form>
            </div>
    );
}

export default ItemForm;