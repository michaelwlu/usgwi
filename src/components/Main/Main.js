import CitySelect from "components/Selects/CitySelect";
import StateSelect from "components/Selects/StateSelect";
import Chart from "containers/Chart";
import Map from "containers/Map";
import React, { useContext } from "react";
import { LocationContext } from "store/store";

const Main = () => {
	const { currCity, currState } = useContext(LocationContext);
	return (
		<div>
			<div className="absolute z-40 flex flex-row space-x-3 rounded">
				<StateSelect />
				<CitySelect />
			</div>
			<Map />
			<div>
				{currState} - {currCity}
			</div>
			<Chart />
		</div>
	);
};

export default Main;
