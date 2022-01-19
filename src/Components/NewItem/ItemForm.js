import React, { useState } from 'react';
import './ItemForm.css';

function ItemForm(props) {
    const [enterName, setEnterName] = useState('');
    const [enterPrice, setEnterPrice] = useState('');
    const [enterDate, setEnterDate] = useState('');

    function nameInputHandler(event) {
        setEnterName(event.target.value);
    }

    function priceInputHandler(event) {
        setEnterPrice(event.target.value);
    }

    function dateInputHandler(event) {
        setEnterDate(event.target.value);
    }

    function saveData(event) {
        event.preventDefault();
        const saveArr = {
            name: enterName,
            price: enterPrice,
            date: enterDate
        }
       // console.log(saveArr);
        //leveling data to one level up
        props.onNewData(saveArr);
        setEnterName('');
        setEnterPrice('');
        setEnterDate('');
    }
    return (
        <div className="outBox">
            <form onSubmit={saveData}>
            <h1>Add Order</h1>

            <div class="column">
                    <label for="order_name">Order Name</label>
                    <input type="text" value={enterName} onChange={nameInputHandler} />

                    <label for="order_price">Price</label>
                    <input type="text" value={enterPrice} onChange={priceInputHandler} />
            </div>

            <div class="column">
                    <label for="dop">Date of purchase</label>
                    <input type="date" value={enterDate} onChange={dateInputHandler} />


                <button type="submit" >Submit </button>
            </div>

            </form>
            </div>
    );
}

export default ItemForm;