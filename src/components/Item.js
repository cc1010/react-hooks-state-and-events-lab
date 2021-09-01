import React, { useState } from "react";

function Item({ name, category }) {
	const [color, setColor] = useState(false);

	function changeColor() {
		setColor(!color);
	}
	const classColor = color ? "in-cart" : "";

	return (
		<li className={classColor}>
			<span>{name}</span>
			<span className="category">{category}</span>
			<button className="add" onClick={changeColor}>
				{color ? "Remove from CartC" : "Add to Cart"}
			</button>
		</li>
	);
}

export default Item;
