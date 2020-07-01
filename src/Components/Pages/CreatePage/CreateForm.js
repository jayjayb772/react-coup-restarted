import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

export class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.setState({value: ''});
    }

    render() {
        return (
            <Grid fluid>
                <form onSubmit={this.handleSubmit}>
                    <Row center="xs">
                        <Col >
                            <label className="Form-Text">
                                Name:
                            </label>
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col >
                                <input type="text" value={this.state.value} onChange={this.handleChange}
                                       className="Name-input"/>
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col>
                            <input type="submit" value="Create Game" className="Submit-button"/>
                        </Col>
                    </Row>
                </form>
            </Grid>
        );
    }
}
