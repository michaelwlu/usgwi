import React, { useContext } from "react";
import { LocationContext } from "store/store";

const CitySelect = () => {
	const cities = ["New York", "Anchorage"];
	const { currCity, dispatch } = useContext(LocationContext);

	const handleChange = (event) => {
		dispatch({ type: "CHANGE_CITY", payload: event.target.value });
	};

	return (
		<div>
			<form>
				<select
					name="state"
					id="state"
					value={currCity}
					onChange={handleChange}
				>
					<option key="0">Select city</option>
					{cities.map((city) => (
						<option key={city}>{city}</option>
					))}
				</select>
			</form>
		</div>
	);
};

export default CitySelect;
