import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
	return (
		<div>
			<Navbar
				bg="dark"
				variant="dark"
				expand="lg"
				className="justify-content-between"
			>
				<Navbar.Brand href="/">
					United States Global Warming Indicator
				</Navbar.Brand>
				<Nav>
					<Nav.Link href="/api">API</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default NavBar;
