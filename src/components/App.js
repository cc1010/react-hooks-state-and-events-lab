import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
	const [color, setColor] = useState(false);
	// replace 'false' with a state variable that can be toggled between true and false
	// this will be used for the Dark Mode Toggle feature

	function toggleColor() {
		console.log("hello");
		setColor((color) => (color = !color));
	}

	const appClass = color ? "App dark" : "App light";

	return (
		<div className={appClass}>
			<header>
				<h2>Shopster</h2>
				<button onClick={toggleColor}>
					{color ? "Dark Mode" : "Light Mode"}
				</button>
			</header>
			<ShoppingList items={itemData} />
		</div>
	);
}

export default App;
