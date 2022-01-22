import React, { useState } from 'react';
function ExpenseFilter(props) {
    const [SelectValue, OnSelect] = useState('2020');
    function SelectYear(event) {
        OnSelect(prevValue => {return event.target.value });
        props.NewSelectValue(event.target.value);
        //console.log(event.target.value);
    }
    return (
        <select value={SelectValue} onChange={SelectYear}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        </select> )
}
export default ExpenseFilter;