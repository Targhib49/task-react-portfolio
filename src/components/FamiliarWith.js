import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class FamiliarWith extends Component {
	render() {
		return (
			<div>
				<Container className="pt-5 familiar">
					<Row className="pb-3">
						<Col className="text-center">
							<h3>I'm Familiar With</h3>
						</Col>
					</Row>
					<Row className="py-3">
						<Col className="text-center">
							<h6>HTML</h6>
						</Col>
						<Col className="text-center">
							<h6>CSS</h6>
						</Col>
						<Col className="text-center">
							<h6>Javascript</h6>
						</Col>
					</Row>
					<Row className="py-3">
						<Col className="text-center">
							<h6>Bootstrap</h6>
						</Col>
						<Col className="text-center">
							<h6>Sass</h6>
						</Col>
						<Col className="text-center">
							<h6>React JS</h6>
						</Col>
					</Row>
					<Row className="py-3">
						<Col className="text-center">
							<h6>C++</h6>
						</Col>
						<Col className="text-center">
							<h6>Arduino</h6>
						</Col>
						<Col className="text-center">
							<h6>STM 32</h6>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
