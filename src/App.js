import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Navigation from './components/Navigation';
import HeaderJumbotron from './components/HeaderJumbotron';
import MiddleJumbotron from './components/MiddleJumbotron';
// import PersonalProjectList from './components/PersonalProjectList'
// import FamiliarWith from './components/FamiliarWith';
// import LanguageSkill from './components/LanguageSkill';
// import AlsoInterested from './components/AlsoInterested';
// import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navigation />
				<HeaderJumbotron />
				<MiddleJumbotron />
			</header>
			<main>
				<Container fluid>
					<Row>
						<Col xl={8} className="bg-info">
							a <br /> c
						</Col>
						<Col className="bg-warning">b</Col>
					</Row>
				</Container>
			</main>
		</div>
	);
}

export default App;
