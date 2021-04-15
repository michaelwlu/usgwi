import CityDropdown from "components/Selects/Dropdowns/CityDropdown";
import StateDropdown from "components/Selects/Dropdowns/StateDropdown";
import Map from "containers/Map";
import React from "react";

const Main = () => {
	return (
		<div>
			<div className="flex flex-row">
				<StateDropdown />
				<CityDropdown />
			</div>
			<Map />
		</div>
	);
};

export default Main;
