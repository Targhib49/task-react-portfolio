import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default class Navigation extends Component {
	render() {
		return (
			<div>
				<Navbar expand="lg" fixed="top">
					<Container className="pt-2">
						<Navbar.Brand className="text" href="#home">
							Targhib Ibrahim
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto">
								<Nav.Link className="active" href="#home">
									Home
								</Nav.Link>
								<Nav.Link href="#link">About Me</Nav.Link>
								<Nav.Link href="#link">Projects</Nav.Link>
								<Nav.Link href="#link">Blog</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}
