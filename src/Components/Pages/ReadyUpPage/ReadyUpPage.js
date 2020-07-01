import React from 'react';
import './ReadyUpPage.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {useParams} from "react-router-dom";
import ReadyUpButton from "./ReadyUpButton";

function ReadyUpPage() {
    let {gameCode, playerName} = useParams();

    return (
        <div className="ReadyUpPage">
            <header className="ReadyUpPage-header">
                <div className="Buttons-paper">
                    <div>
                        <p>Welcome to Coup, {playerName}</p>
                        <p>Game {gameCode} will start when everyone is ready</p>
                    </div>

                </div>
            </header>
            <div>
                <Grid fluid>
                    <Row center="xs">
                        <Col xs={1}>
                            <ReadyUpButton className="ReadyUpBtn"/>
                        </Col>
                    </Row>
                </Grid>

            </div>
        </div>
    );
}

export default ReadyUpPage;
