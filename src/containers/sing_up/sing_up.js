import React, { Component } from "react";
import {
	Form,
	FormGroup,
	Col,
	FormControl,
	ControlLabel,
	Button
} from "react-bootstrap";
import "../../../src/style/index.css";

class SingUp extends Component {
	render() {
		return (
			<div className="form-button-style logins">
				<Form horizontal className="logins">
					<FormGroup>
						<Col componentClass={ControlLabel} sm={2}>
							Name
						</Col>
						<Col sm={10}>
							<FormControl type="text" placeholder="Name" />
						</Col>
					</FormGroup>

					<FormGroup>
						<Col componentClass={ControlLabel} sm={2}>
							Surname
						</Col>
						<Col sm={10}>
							<FormControl type="text" placeholder="Surname" />
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							Email
						</Col>
						<Col sm={10}>
							<FormControl type="email" placeholder="Email" />
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} sm={2}>
							Password
						</Col>
						<Col sm={10}>
							<FormControl
								type="password"
								placeholder="Password"
							/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit">Save</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default SingUp;
