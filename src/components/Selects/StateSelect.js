import React, { useContext } from "react";
import { LocationContext } from "store/store";

const StateSelect = () => {
	const states = ["Alaska", "Alabama"];
	const { currState, dispatch } = useContext(LocationContext);

	const handleChange = (event) => {
		dispatch({ type: "CHANGE_STATE", payload: event.target.value });
	};

	return (
		<div>
			<form>
				<select
					name="state"
					id="state"
					value={currState}
					onChange={handleChange}
				>
					<option key="0">Select state</option>
					{states.map((state) => (
						<option key={state}>{state}</option>
					))}
				</select>
			</form>
		</div>
	);
};

export default StateSelect;
