import ItemForm from './ItemForm';
function NewItem(props) {

    function NewAvailData(ExpenseNewData) {
       // const TableNewData = {
        //    ...ExpenseNewData
        //};
       // return TableNewData;
        props.newDataArr(ExpenseNewData);
       // console.log(TableNewData);
    }

    return (
        <div>
            <ItemForm onNewData={NewAvailData}/>
        </div>
    );


}

export default NewItem;