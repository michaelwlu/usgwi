import React, { useEffect, useContext, useState } from "react";
import { Line } from "react-chartjs-2";
import { LocationContext } from "store/store";
import "../stylesheets/chart.css";

const Chart = () => {
	const { currentWeatherList } = useContext(LocationContext);

	console.log("Printing weather data from chart: ", currentWeatherList);

	const avgTemps =
		currentWeatherList &&
		currentWeatherList.map((item) => {
			return item.avg_temp;
		});

	const yearLabels =
		currentWeatherList &&
		currentWeatherList.map((item) => {
			return item.year;
		});

	const [tempData, setTempDate] = useState([33, 53, 85, 41, 44, 65]);
	const [precpData, setPrecpDate] = useState([33, 25, 35, 51, 54, 76]);

	const info = {
		labels: yearLabels,
		datasets: [
			{
				label: "Temperature",
				data: avgTemps,
				fill: true,
				backgroundColor: "rgba(75,192,192,0.2)",
				borderColor: "rgba(75,192,192,1)",
			},
		],
	};

	useEffect(() => {
		console.log("Temp Data", tempData);
		console.log("Precp Data", precpData);
	}, [tempData, precpData]);

	return (
		<div className="h-96">
			<div className="chart">
				<Line data={info} />
				<button onClick={() => setTempDate(tempData.map((item) => item * 2))}>
					{" "}
					Change Temp
				</button>
				<button onClick={() => setPrecpDate(precpData.map((item) => item * 3))}>
					{" "}
					Change Precipitation
				</button>
			</div>
		</div>
	);
};

export default Chart;
