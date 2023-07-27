import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([]);
	function addItem(){
		if (!newItem){
			alert("Agregar tarea")
			return;
		}

		const item={id:Math.floor(Math.random()*1000),
			value: newItem
		};
    setItems(oldList => [...oldList, item]);
	setNewItem("")
	console.log(items)
	}

	function deleteItem(id){
      const newArray = items.filter(item => item.id !==id);
	  setItems(newArray);
	}

	return (
		<div className="App">
			<h1>Todo list App</h1>
			<input 
			type="text" 
			placeholder= "Add task..."
			value={newItem}
			onChange={e => setNewItem(e.target.value)}
			/>
			
			<button onClick={()=> addItem()}>Agregar</button>

<ul>
{items.map(item => {
	return(
		<li key={(item.id)}> {item.value} <button className="delete-button" onClick={() => deleteItem(item.id)}>X</button></li> 
	)

})}
</ul>
			
</div>
	);
}

export default Home;
