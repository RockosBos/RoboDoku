import { Button } from "bootstrap";

const EnterTeamModal = (props) => {

	const onSubmit = async (e) => {
		e.preventDefault();


	}

	return(
		<>
			<form onSubmit={onSubmit}>
				<label htmlFor="teamNum">Enter Team Number</label>
				<input id="teamNum" />
				<button>Submit</button>
				<button >Cancel</button>
			</form>
		</>
	)
}

export default EnterTeamModal;