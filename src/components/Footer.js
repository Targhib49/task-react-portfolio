import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
	render() {
		return (
			<div>
				<Container fluid className="">
					<Row className="my-footer align-items-center">
						<Col className="text-center">
							<h6>Copyright &copy; 2020 by Impactbyte #13 Master Mizuchi</h6>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
