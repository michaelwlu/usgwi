import React, { createContext, useReducer } from "react";

const initialState = { currState: "Alaska", currCity: "Anchorage" };

const reducer = (state, { type, payload }) => {
	switch (type) {
		case "CHANGE_STATE":
			return { ...state, currState: payload };
		case "CHANGE_CITY":
			return { ...state, currCity: payload };
		default:
			throw new Error();
	}
};

export const LocationContext = createContext(initialState);

export const LocationProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<LocationContext.Provider
			value={{ currCity: state.currCity, currState: state.currState, dispatch }}
		>
			{children}
		</LocationContext.Provider>
	);
};
