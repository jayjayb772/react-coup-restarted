import React from 'react';
import './ReadyUpPage.css';

class ReadyUpButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ready: false,
        }
    }

    changeReady(){
        this.setState({ready:!this.state.ready});

    }

    render(){
        let btn_class = this.state.ready ? "UnReady-button":"Ready-button" ;
        let btn_txt = this.state.ready ? "cancel" : "Ready Up!" ;
        return(
            <button className={btn_class} onClick={this.changeReady.bind(this)}>
                {btn_txt}
            </button>
        )
    }
}

export default ReadyUpButton;