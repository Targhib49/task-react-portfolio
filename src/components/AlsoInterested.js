import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class AlsoInterested extends Component {
	render() {
		return (
			<div>
				<Container className="pt-5 interested">
					<Row>
						<Col className="text-center">
							<h3>I'm Interested in all kind of project</h3>
						</Col>
					</Row>
					<Row className="py-4">
						<Col className="text-center">
							<h5>But</h5>
						</Col>
					</Row>
					<Row>
						<Col className="text-center">
							<h6>
								I'm particularly interested with smart city development and human-machine-nature
								interaction
							</h6>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
