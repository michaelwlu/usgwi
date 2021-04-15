import CityDropdown from "components/Selects/Dropdowns/CityDropdown";
import StateDropdown from "components/Selects/Dropdowns/StateDropdown";
import Map from "containers/Map";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from 'containers/Chart'

const Main = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<StateDropdown />
					</Col>
					<Col>
						<CityDropdown />
					</Col>
				</Row>
			</Container>
			<Map />
			<Chart />
		</div>
	);
};

export default Main;
