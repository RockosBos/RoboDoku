import './App.css';
import logo from './assets/FIRST-Icon.png'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import EnterTeamModal from './components/Modals/EnterTeamModal';

function App() {
	const cardHeadTopStyle = {
		height: '5rem',
		width: '10rem',
		backgroundColor: 'lightgrey',
		margin: 'auto'
	}

	const cardHeadSideStyle = {
		height: '10rem',
		width: '5rem',
		backgroundColor: 'lightgrey',
		margin: 'auto'
	}

	const cardContentStyle = {
		height: '10rem',
		width: '10rem',
		backgroundColor: 'white',
		border: '1px solid grey',
		borderRadius: '8px'

	}

	const gridContainerStyle = {
		width: '50%',
		height: '50%',
		borderRadius: '4px',
		backgroundColor: 'lightGrey',
		border: '2px solid black'
	}

	const gridContentContainerStyle = {
		backgroundColor: 'white',
		borderRadius: '12px'
	}

  return (
	<>
		<div className="pageDiv">
			<div className='headerDiv'>
				<div className='headerLogo'>
					<img src={logo}></img>
				</div>
				<div className='headerText'>
					<h1>Welcome to RoboDoku</h1>
				</div>
				<div className='headerExtras'>

				</div>
			</div>

			<EnterTeamModal />

			<div className='bodyDiv'>
				<Container fluid style={gridContainerStyle}>
					<Row>
						<Col sm={3} style={cardHeadTopStyle}>
							
						</Col>
						<Col sm={3} style={cardHeadTopStyle}>
							Header 1
						</Col>
						<Col sm={3} style={cardHeadTopStyle}>
							Header 2
						</Col>
						<Col sm={3} style={cardHeadTopStyle}>
							Header 3
						</Col>
					</Row>
					<Row>
						<Col sm={3}>
							<Row style={cardHeadSideStyle}>
								Row 1
							</Row>
							<Row style={cardHeadSideStyle}>
								Row 2
							</Row>
							<Row style={cardHeadSideStyle}>
								Row 3
							</Row>
						</Col>
						<Col sm={9}>
							<Container style={gridContentContainerStyle}>
								<Row>
									<Col style={cardContentStyle}>
										Content 1
									</Col>
									<Col style={cardContentStyle}>
										Content 2
									</Col>
									<Col style={cardContentStyle}>
										Content 3
									</Col>
								</Row>
								<Row>
									<Col style={cardContentStyle}>
										Content 4
									</Col>
									<Col style={cardContentStyle}>
										Content 5
									</Col>
									<Col style={cardContentStyle}>
										Content 6
									</Col>
								</Row>
								<Row>
									<Col style={cardContentStyle}>
										Content 7
									</Col>
									<Col style={cardContentStyle}>
										Content 8
									</Col>
									<Col style={cardContentStyle}>
										Content 9
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
					
					
				</Container>
			</div>
		</div>
	</>
  );
}

export default App;
