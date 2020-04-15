import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Navigation from './components/Navigation';
import HeaderJumbotron from './components/HeaderJumbotron';
// import MiddleJumbotron from './components/MiddleJumbotron';
// import PersonalProjectList from './components/PersonalProjectList'
import FamiliarWith from './components/FamiliarWith';
import LanguageSkill from './components/LanguageSkill';
import AlsoInterested from './components/AlsoInterested';
// import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navigation />
				<HeaderJumbotron />
			</header>
			<main>
				<Container fluid>
					<Row xs={1} s={1} m={3} lg={3} xl={3}>
						<Col className="bg-warning">
							<FamiliarWith />
						</Col>
						<Col className="bg-success">
							<AlsoInterested />
						</Col>
						<Col className="bg-info">
							<LanguageSkill />
						</Col>
					</Row>
				</Container>
			</main>
		</div>
	);
}

export default App;
