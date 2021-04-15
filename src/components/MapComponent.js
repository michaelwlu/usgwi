import { useEffect, useRef } from "react";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import "../stylesheets/map.css";

const MapComponent = () => {
<<<<<<< HEAD
	const mapRef = useRef({ view: null });
=======
	const mapRef = useRef({view: null});
>>>>>>> 2eb643ecd5d5747ec3ac71a1aabf4bb39a92b3a8

	useEffect(() => {
		if (mapRef && mapRef.current) {
			const map = new ArcGISMap({
				basemap: "satellite",
			});

			const view = new MapView({
				map: map,
				container: "viewDiv",
				center: [-87.62, 41.87],
				zoom: 12,
			});

			view.when(() => {
				mapRef.current.view = view;
<<<<<<< HEAD
			});
=======
			})
>>>>>>> 2eb643ecd5d5747ec3ac71a1aabf4bb39a92b3a8
		}
	}, [mapRef]);

	return null;
};

export default MapComponent;
