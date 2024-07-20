import './App.css';
import logo from './assets/FIRST-Icon.png'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
	<>
		<div classname="pageDiv">
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

			<div className='bodyDiv'>
				<Button>Test Button</Button>
				<Container>
					<Row>
						<Col md="auto">
							<Card>
								Empty Square
							</Card>
						</Col>
						<Col>
							<Card>
								Criteria 1
							</Card>
						</Col>
						<Col>
							<Card>
								Criteria 2
							</Card>
						</Col>
						<Col>
							<Card>
								Criteria 3
							</Card>
						</Col>
					</Row>

					<Row>
						<Col>
							<Card>
								Criteria 4
							</Card>
						</Col>
						<Col>
							<Card>
								Box 1
							</Card>
						</Col>
						<Col>
							<Card>
								Box 2
							</Card>
						</Col>
						<Col>
							<Card>
								Box 3
							</Card>
						</Col>
					</Row>

					<Row>
						<Col>
							<Card>
								Criteria 5
							</Card>
						</Col>
						<Col>
							<Card>
								Box 4
							</Card>
						</Col>
						<Col>
							<Card>
								Box 5
							</Card>
						</Col>
						<Col>
							<Card>
								Box 6
							</Card>
						</Col>
					</Row>

					<Row>
						<Col>
							<Card>
								Criteria 6
							</Card>
						</Col>
						<Col>
							<Card>
								Box 7
							</Card>
						</Col>
						<Col>
							<Card>
								Box 8
							</Card>
						</Col>
						<Col>
							<Card>
								Box 9
							</Card>
						</Col>
					</Row>
					
				</Container>
			</div>
		</div>
	</>
  );
}

export default App;
