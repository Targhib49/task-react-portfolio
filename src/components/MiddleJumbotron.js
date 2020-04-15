import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class MiddleJumbotron extends Component {
	render() {
		return (
			<Container fluid className="py-5 quotes">
				<Row>
					<Col className="text-center">
						<h2>
							"Plans to protect air and water, wilderness and wildlife, are in fact plans to protect
							human"
						</h2>
					</Col>
				</Row>
				<Row>
					<Col className="text-center">
						<h5>-Stewart Udall</h5>
					</Col>
				</Row>
			</Container>
		);
	}
}
