import React, { useContext } from "react";
import { LocationContext } from "store/store";

const CitySelect = () => {
	const { currCity, cityList, dispatch } = useContext(LocationContext);

	const handleChange = (event) => {
		dispatch({ type: "CHANGE_CITY", payload: event.target.value });
	};

	let cityNames = (cityList.length && cityList.map(city => {
		return (
			{
				name: city.attributes.name,
				id: city.attributes.id
			}
		)
	}))
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
					{cityNames.length && cityNames.map((city, index) => (
						<option
							key={index}
							value={city.objectid}
						>
							{city.name}
						</option>
					))}
				</select>
			</form>
		</div>
	);
};

export default CitySelect;
