import React from 'react';
import axios from 'axios';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: false, userName: '', password: '' ,isValid : true};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    handleSubmit() {
        let self = this;
       
        axios.get('src/rest/login.json')
            .then(function (response) {
                response.data.map((user)=>{
                    if(user.userName === self.state.userName && user.password === self.state.password ){
                        self.props.setLogin( true,user.role);
                        self.setState({isValid :true })
                    }else{
                        self.setState({isValid :false })
                    }
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleChangeUserName(event){
        this.setState({userName : event.target.value});
    }
     handleChangePassword(event){
        this.setState({password : event.target.value});
    }

    render() {
        return (
            <div className="email-class email-class-div login-cls">
                <div className="row row-login header-class">
                    <h3 className="float-class" >Login</h3>
                    <img src="src/img/star.png" className="float-class img-class" alt="Smiley face" height="35" width="35" />
                </div>
                <div className="error-div" style={{display : !this.state.isValid?'block':'none'}}>Invalid username or password</div>
                <div className="row row-login androidTextbox">
                    <input className="col-md-6" type="text" placeholder="User ID/Email" onChange={this.handleChangeUserName}/>
                </div>
                <div className="row row-login androidTextbox">
                    <input className="col-md-6" type="password" placeholder="Password" onChange={this.handleChangePassword} />
                </div>
                <div className="row row-login submit-row" onClick={this.handleSubmit}>
                    <div id="button" >SUBMIT</div>
                </div>
            </div>
        );
    }

}

