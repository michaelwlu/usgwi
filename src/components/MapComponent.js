import { useContext, useEffect, useRef } from "react";
import { LocationContext } from "store/store";
import WebMap from "@arcgis/core/WebMap";
import esriConfig from "@arcgis/core/config";
import MapView from "@arcgis/core/views/MapView";
import "../stylesheets/map.css";

const MapComponent = () => {
	const mapRef = useRef({ view: null });
	const portalURL = 'https://age.spatialfrontgis.com/portal';
	const portalId = 'a759d3ccd3754a2e91d307d3a6321dc1';
	let cityLayer;
	const cityLayerId = 'Cities';
	const { cityList, dispatch } = useContext(LocationContext);

	useEffect(() => {
		if (mapRef && mapRef.current) {
			esriConfig.portalUrl = portalURL;
			const portalWebMap = new WebMap({
				portalItem: {
					id: portalId,
				},
			});

			const view = new MapView({
				map: portalWebMap,
				container: "viewDiv",
				center: [-96, 34],
				zoom: 4,
			});

			view.when(() => {
				mapRef.current.view = view;
				mapRef.current.portalWebMap = portalWebMap;

				mapRef.current.portalWebMap.when(function() {

					cityLayer = portalWebMap.layers && portalWebMap.layers.items[0];

					if (cityLayer) {
						var cityQuery = cityLayer.createQuery();
						cityQuery.where = "objectid > 0";
						cityQuery.outFields = [ "name", "objectid", "field1", "id" ];

						cityLayer.queryFeatures(cityQuery)
						.then(function(response){
							dispatch({ type: "POPULATE_CITY_LIST", payload: response.features });
						 });
					}
				});
			});
		}
	}, [mapRef]);

	return null;
};

export default MapComponent;
