import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import Login from './Login';
import Feed from './NewsFeed'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: false,userType:'' };
        this.setLogin = this.setLogin.bind(this);
       
    }
    setLogin(value,userType){
        this.setState({login : value,userType : userType});
    }
    render() {
        return (<div id="app" className={!this.state.login ?'app-sm':'app-lg'}>
        {!this.state.login ?<Login setLogin={this.setLogin} /> : <Feed  userType={this.state.userType}/>}
        </div>);
    }

}

