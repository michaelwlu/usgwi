import React, { useContext } from "react";
import { LocationContext } from "store/store";

const CitySelect = () => {
	const { currCity, cityList, dispatch } = useContext(LocationContext);

	const handleChange = (event) => {
		dispatch({ type: "CHANGE_CITY", payload: event.target.value });
	};

	const cityNames = (cityList.length && cityList.map(city => city.attributes.name))
		|| [];

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
					{cityNames.length && cityNames.map((city) => (
						<option key={city}>{city}</option>
					))}
				</select>
			</form>
		</div>
	);
};

export default CitySelect;
