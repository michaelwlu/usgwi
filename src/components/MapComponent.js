import { useContext, useEffect, useRef } from "react";
import { LocationContext } from "store/store";
import WebMap from "@arcgis/core/WebMap";
import esriConfig from "@arcgis/core/config";
import MapView from "@arcgis/core/views/MapView";
import "../stylesheets/map.css";

const MapComponent = () => {
	const mapRef = useRef({ view: null, portalWebMap: null });
	const portalURL = "https://age.spatialfrontgis.com/portal";
	const portalId = "a759d3ccd3754a2e91d307d3a6321dc1";
	let cityLayer;
	let weatherLayer;
	const { currCity, weatherData, cityList, dispatch } = useContext(
		LocationContext
	);

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

				mapRef.current.portalWebMap.when(function () {
					weatherLayer = portalWebMap.layers && portalWebMap.layers.items[0];
					cityLayer = portalWebMap.layers && portalWebMap.layers.items[1];

					if (cityLayer) {
						var cityQuery = cityLayer.createQuery();
						cityQuery.where = "objectid > 0";
						cityQuery.outFields = ["name", "objectid", "field1", "id"];

						try {
							cityLayer.queryFeatures(cityQuery).then(function (response) {
								if (!cityList.length) {
									dispatch({
										type: "POPULATE_CITY_LIST",
										payload: response.features,
									});
								}
							});
						} catch (err) {
							console.log(err);
						}
					}

					if (weatherLayer) {
						var weatherQuery = weatherLayer.createQuery();
						weatherLayer.where = "objectid > 0";
<<<<<<< HEAD
						weatherLayer.outFields = ["avg_temp"];

						weatherLayer.queryFeatures(weatherQuery).then(function (response) {
							const formattedData =
								response.features.map((item) => {
									return {
										name: item.name,
										id: item.id,
										avg_temp: item.avg_temp,
										state: item.state,
									};
								}) || [];
							dispatch({
								type: "POPULATE_WEATHER_DATA",
								payload: formattedData,
							});
						});
=======
						weatherLayer.outFields = ['avg_temp', 'name', 'state', 'id', 'year'];

						weatherLayer.queryFeatures(weatherQuery)
						.then(function(response) {
							const formattedData = response.features.map(item => {
								return (
									{
										name: item.attributes.name,
										id: item.attributes.id,
										avg_temp: item.attributes.avg_temp,
										state: item.attributes.state,
										year: item.attributes.year
									}
								)
							}) || [];
							dispatch({type: 'POPULATE_WEATHER_DATA', payload: formattedData})
						})
>>>>>>> 53274fee115d639f00a22082539a439a03774a99
					}
				});
			});
		}
	}, [mapRef]);

	useEffect(() => {
		if (mapRef && mapRef.current && mapRef.current.portalWebMap && currCity) {
<<<<<<< HEAD
			mapRef.current.portalWebMap.when(function () {
				cityLayer =
					mapRef.current.portalWebMap.layers &&
					mapRef.current.portalWebMap.layers.items[1];
=======

			let result = [];

			weatherData.forEach(item => {
				if (item.name === currCity) {
					result.push(item)
				}
			})

			dispatch({
				type: 'CHANGE_WEATHER_DATA',
				payload: result
			})

			mapRef.current.portalWebMap.when(function() {

				cityLayer = mapRef.current.portalWebMap.layers
					&& mapRef.current.portalWebMap.layers.items[1];
>>>>>>> 53274fee115d639f00a22082539a439a03774a99

				if (cityLayer) {
					var cityQuery = cityLayer.createQuery();
					cityQuery.where = `name = '${currCity}'`;
					cityQuery.outFields = ["name", "objectid", "field1", "id"];

					try {
						cityLayer.queryFeatures(cityQuery).then(function (response) {
							const features = response.features;
							if (features.length) {
								mapRef.current.view.goTo(features[0]);
							}
						});
					} catch (err) {
						console.log(err);
					}
				}
			});
		}
<<<<<<< HEAD
	}, [currCity]);
=======
	}, [currCity, weatherData])
>>>>>>> 53274fee115d639f00a22082539a439a03774a99

	useEffect(() => {
		console.log("Weather data: ", weatherData);
	}, [weatherData]);

	return null;
};

export default MapComponent;
