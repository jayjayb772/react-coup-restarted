import React from 'react';
import './HomePage.css';
import {Grid, Row, Col} from 'react-flexbox-grid';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <div className="Buttons-paper">
                    <div>
                        <p>Welocome to Coup!</p>
                        <p>Create a game or Join with a code!</p>
                    </div>

                </div>
            </header>
            <div>
                <Grid fluid>
                    <Row center="xs">
                        <Col xs={1}>
                            <button className="Join-button">
                                Join Game
                            </button>
                        </Col>
                        <Col xs={1}>
                            <button className="Create-button">
                                Create Game
                            </button>
                        </Col>
                    </Row>
                </Grid>

            </div>
        </div>
    );
}

export default HomePage;
