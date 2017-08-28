import React from "react";

import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { BrowserRouter, Route } from "react-router-dom";

export class Login extends React.Component {

    onSubmit(val) {
        console.log(val);
        return false;
    }

    render() {
        return (
            <div className="form col-xs-12 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <FormGroup controlId="formLogin">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            id="formControlsEmail"
                            type="email"
                            placeholder="email"
                        />
                        <ControlLabel>Senha</ControlLabel>
                        <FormControl
                            id="formControlsPassword"
                            type="password"
                        />
                        <div className="center">
                            <button type="submit" className="button">
                                Login
                            </button>
                        </div>
                    </FormGroup>
                </form>
            </div>
        );
    }
}
