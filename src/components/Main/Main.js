import CitySelect from "components/Selects/CitySelect";
import Chart from "containers/Chart";
import Map from "containers/Map";
import React from "react";
import "stylesheets/map.css";

const Main = () => {
	return (
		<div>
			<div className="absolute z-40 flex flex-row space-x-3 rounded">
				<CitySelect />
			</div>
			<Map />
			<Chart />
		</div>
	);
};

export default Main;
