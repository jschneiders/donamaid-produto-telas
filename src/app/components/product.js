import React from "react";

import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Link } from "react-router-dom";

export class Product extends React.Component {

    constructor() {
        super();
        this.state = {
            price: 0,
            initialHour: 1,
            hour: 1
        };
    }

    componentDidMount() {
        this.setState({
            price: this.state.initialHour * 15 + 14 +',90'
        });
    }

    handleChange(e) {
        this.setState({
            price: e.target.value * 15 + 14 +',90',
            hour: e.target.value
        });
    }

    render() {
        return (
            <div className="form col-xs-12 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4">
                <form>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Quantas horas você deseja?</ControlLabel>
                        <FormControl componentClass="select" value={this.state.hour} ref="initialHour" placeholder="select" onChange={this.handleChange.bind(this)}>
                            <option value="1">1 hora</option>
                            <option value="2">2 horas</option>
                            <option value="3">3 horas</option>
                            <option value="4">4 horas</option>
                        </FormControl>
                    </FormGroup>
                </form>
                <div className="show-value">{this.state.hour} horas somente R$ {this.state.price}</div>
                <div className="center">
                    <Link to="/login" className="button">contratar</Link>
                </div>
            </div>
        );
    }
}