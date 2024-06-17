import './App.css';
import logo from './assets/FIRST-Icon.png'

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
				<table>
					<tr>
						<td>
							<p>1</p>
						</td>
						<td>
							<p>2</p>
						</td>
						<td>
							<p>3</p>
						</td>
						<td>
							<p>4</p>
						</td>
					</tr>

					<tr>
						<td>
							<p>1</p>
						</td>
						<td>
							<p>2</p>
						</td>
						<td>
							<p>3</p>
						</td>
						<td>
							<p>4</p>
						</td>
					</tr>

					<tr>
						<td>
							<p>1</p>
						</td>
						<td>
							<p>2</p>
						</td>
						<td>
							<p>3</p>
						</td>
						<td>
							<p>4</p>
						</td>
					</tr>

					<tr>
						<td>
							<p>1</p>
						</td>
						<td>
							<p>2</p>
						</td>
						<td>
							<p>3</p>
						</td>
						<td>
							<p>4</p>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</>
  );
}

export default App;
