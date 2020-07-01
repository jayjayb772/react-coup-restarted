import React from 'react';
import './CreatePage.css';
import {Grid, Row, Col} from 'react-flexbox-grid';

function CreatePage() {
    return (
        <div className="CreatePage">
            <header className="CreatePage-header">
                <div className="Buttons-paper">
                    <div>
                        <p>Enter your Name!</p>
                        <p>Press create game when ready!</p>
                    </div>

                </div>
            </header>
            <div>
                <Grid fluid>
                    <Row center="xs">
                    </Row>
                </Grid>

            </div>
        </div>
    );
}

export default CreatePage;
