import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class LanguageSkill extends Component {
	render() {
		return (
			<div>
				<Container className="pt-5 language">
					<Row>
						<Col className="text-center">
							<h3>I speak Indonesian</h3>
						</Col>
					</Row>
					<Row className="pt-4">
						<Col className="text-center">
							<h6>but, I can also help you in your project if you speak these language</h6>
						</Col>
					</Row>
					<Row className="pt-4">
						<Col className="text-center">
							<h6>English</h6>
						</Col>
						<Col className="text-center">
							<h6>Arabic</h6>
						</Col>
					</Row>
					<Row className="pt-3">
						<Col className="text-center">
							<h6>Japanese</h6>
						</Col>
						<Col className="text-center">
							<h6>Spanish</h6>
						</Col>
					</Row>
					<Row className="pt-3">
						<Col className="text-center">
							<h6>
								If the language you speak didn't mentioned before, just contact me and we'll figure it
								out
							</h6>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
