import ItemForm from './ItemForm';
function NewItem() {

    function NewAvailData(ExpenseNewData) {
        const TableNewData = {
            ...ExpenseNewData
        };
        console.log(TableNewData);
    }

    return (
        <div>
            <ItemForm onNewData={NewAvailData}/>
        </div>
    );


}

export default NewItem;