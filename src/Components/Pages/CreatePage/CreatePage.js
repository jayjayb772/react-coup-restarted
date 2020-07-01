import React from 'react';
import './CreatePage.css';
import {CreateForm} from './CreateForm.js';


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
                <CreateForm/>
            </div>
        </div>
    );
}

export default CreatePage;
