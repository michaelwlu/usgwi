import React from "react";
<<<<<<< HEAD
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
=======
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
>>>>>>> 2eb643ecd5d5747ec3ac71a1aabf4bb39a92b3a8

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
