import React, { createContext, useReducer } from "react";

const initialState = {
	currState: "Alaska",
	currCity: "Anchorage",
	stateList: [],
	cityList: [],
	weatherData: [],
<<<<<<< HEAD
=======
	currentWeatherList: []
>>>>>>> 53274fee115d639f00a22082539a439a03774a99
};

const reducer = (state, { type, payload }) => {
	switch (type) {
		case "CHANGE_STATE":
			return { ...state, currState: payload };
		case "CHANGE_CITY":
			return { ...state, currCity: payload };
		case "POPULATE_STATE_LIST":
			return { ...state, stateList: payload };
		case "POPULATE_CITY_LIST":
			return { ...state, cityList: payload };
		case "POPULATE_WEATHER_DATA":
			return { ...state, weatherData: payload };
		case "CHANGE_WEATHER_DATA":
			return { ...state, currentWeatherList: payload };
		default:
			throw new Error();
	}
};

export const LocationContext = createContext(initialState);

export const LocationProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<LocationContext.Provider value={{ ...state, dispatch }}>
			{children}
		</LocationContext.Provider>
	);
};
