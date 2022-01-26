import React, { useState } from 'react';
import './ItemForm.css';

function ItemForm(props) {
    const [enterName, setEnterName] = useState('');
    const [enterPrice, setEnterPrice] = useState('');
    const [enterDate, setEnterDate] = useState('');
    let l1 = { display: "none" };
    let l2 = { display: "block" };
    const [displayValue, showDisplayValue] = useState(l1);
    const [displayFormValue, showDisplayFormValue] = useState(l2);


    function nameInputHandler(event) {
        setEnterName(event.target.value);
    }

    function removeForm(event) {
        showDisplayValue(l2);
        showDisplayFormValue(l1);

    }

    function showForm(event) {
        showDisplayValue(l1);
        showDisplayFormValue(l2);

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
            date: enterDate,
            id: Math.random()
        }
       // console.log(saveArr);
        //leveling data to one level up
        props.onNewData(saveArr);
        setEnterName('');
        setEnterPrice('');
        setEnterDate('');
        removeForm();
    }
    return (
       <div>
            <input type="button" onClick={showForm} value="Add New Expense" className="cancel" style={displayValue}/>
         <div className="outBox">
            <form onSubmit={saveData} style={displayFormValue}>
            <h1>Add Order</h1>

            <div className="column">
                    <label>Order Name</label>
                    <input type="text" value={enterName} onChange={nameInputHandler} />

                    <label>Price</label>
                    <input type="text" value={enterPrice} onChange={priceInputHandler} />
            </div>

            <div className="column">
                    <label>Date of purchase</label>
                    <input type="date" value={enterDate} onChange={dateInputHandler} />


                    <button type="submit" >Submit </button>
                        <input type="button" className="cancel" onClick={removeForm} value="Cancel"/>
            </div>

            </form>
            </div>
            </div>
    );
}

export default ItemForm;