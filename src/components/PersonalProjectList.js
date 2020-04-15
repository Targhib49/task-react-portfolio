import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardDeck, Card, Button } from 'react-bootstrap';

export default class PersonalProjectList extends Component {
	render() {
		return (
			<Container fluid className="py-5">
				<Row className="pb-5">
					<Col className="text-center">
						<h2>My personal project</h2>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<CardDeck>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title className="text-center">
									Tree donating Monitoring System (on progress)
								</Card.Title>
								<Card.Text>
									You want to donate trees for better environment, but worries if your plant won't be
									taken care well. We can help you ease up your worries
								</Card.Text>
								<Row>
									<Col>
										<Button variant="primary">Github</Button>
									</Col>
									<Col>
										<Button variant="primary">Live Code</Button>
									</Col>
								</Row>
							</Card.Body>
						</Card>

						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title className="text-center">12 Labor of Hercules (on progress)</Card.Title>
								<Card.Text>
									Interactive web novel that tell the stories of Greek's greatest hero, Hercules, when
									he faced the 12 impossible challenge for a man
								</Card.Text>
								<Row>
									<Col>
										<Button variant="primary">Github</Button>
									</Col>
									<Col>
										<Button variant="primary">Live Code</Button>
									</Col>
								</Row>
							</Card.Body>
						</Card>

						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title className="text-center">Rate Your Movie (On progress)</Card.Title>
								<Card.Text>
									A simple web to rate and review your favorite movie and share it with other user.
									You can also see score for your favorite movie
								</Card.Text>
								<Row>
									<Col>
										<Button variant="primary">Github</Button>
									</Col>
									<Col>
										<Button variant="primary">Live Code</Button>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</CardDeck>
				</Row>
			</Container>
		);
	}
}
