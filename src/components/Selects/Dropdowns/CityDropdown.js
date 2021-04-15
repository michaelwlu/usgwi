import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const CityDropdown = () => {
	const states = ["Anchorage", "Los Angeles"];

	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Select city
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{states.map((city) => (
						<Dropdown.Item as="button">{city}</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default CityDropdown;
