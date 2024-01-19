//React lists
function Fruit(props){
    const name = props.name

    return <li>this is {name}</li>
}

function Grocery(){

    const groceryItems = [
        {id: 1, name: 'banana'},
        {id: 2, name: 'apple'},
        {id: 3, name: 'cherry'},
        {id: 4, name: 'orange'}
    ]

    return (
        <>
            <h1>Grocery List:</h1>
            {
                //groceryItems.map((item) => <Fruit key = {item.id} name = {item.name} />)
                groceryItems.map((item) => <li key={item.id}>this is {item.name}</li>)
            }
        </>
    )

}

export {Grocery}