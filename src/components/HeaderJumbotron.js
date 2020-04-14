import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt, faScroll } from '@fortawesome/free-solid-svg-icons';

export default class HeaderJumbotron extends Component {
	render() {
		return (
			<div>
				<Jumbotron className="header-jumbotron text-center shadow-sm" fluid>
					<Container className="pt-5 mt-5">
						<Row className="justify-content-center">
							<Col className="col-8">
								<h1>IoT and Frontend Web Developer</h1>
							</Col>
						</Row>
						<Row className="justify-content-center">
							<Col className="col-8">
								<p>
									Soon to be graduated from Electrical Engineerings Bachelor School of Bandung
									Institute of Technology (Expected : 2021/2022)
								</p>
							</Col>
						</Row>
						<Row xs={5} md={6} md={6} lg={6} xl={6} className="mt-3 justify-content-center">
							<Col className="text-center">
								<FontAwesomeIcon className="socials" icon={faGithub} />
								<p className="socials">Github</p>
							</Col>
							<Col className="text-center">
								<FontAwesomeIcon className="socials" icon={faAt} />
								<p className="socials">Email</p>
							</Col>
							<Col className="text-center">
								<FontAwesomeIcon className="socials" icon={faScroll} />
								<p className="socials">Resume</p>
							</Col>
						</Row>
					</Container>
				</Jumbotron>
			</div>
		);
	}
}
