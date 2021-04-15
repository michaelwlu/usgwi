import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const StateDropdown = () => {
	const states = ["Alaska", "Alabama"];

	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Select state
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{states.map((state) => (
						<Dropdown.Item as="button">{state}</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default StateDropdown;
