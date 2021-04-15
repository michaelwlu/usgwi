import React from "react";
import MapComponent from "../components/MapComponent";

const Map = () => {
	return (
		<div className="qsr-map col-md-8">
			<MapComponent />
			<div className="webmap" id="viewDiv" />
		</div>
	);
};

export default Map;
