import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from '../../dux/reducer';

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    handleRegister() {
        axios.post(`http://localhost:4000/register`, {
            username: this.state.username,
            password: this.state.password
        }).then((res) => {
            console.log(res.data)
            const {client_id,client_username,client_pic} = res.data;
            this.props.updateUser(client_id,client_username,client_pic)
            window.location.assign('http://localhost:3000/#/dashboard')
        })
    }
    handleLogin() {
        axios.post(`http://localhost:4000/login`, {
            username: this.state.username,
            password: this.state.password
        }).then((res) => {
            console.log(res.data)
            const {client_id,client_username,client_pic} = res.data[0];
            this.props.updateUser(client_id,client_username,client_pic)
            window.location.assign('http://localhost:3000/#/dashboard')
        })
    }
    render() {
        return (
            <div>
                <h1>Auth</h1>
                <h3>Username:</h3>
                <input value={this.state.username} placeholder='Username' onChange={e => this.handleUsername(e)} />
                <h3>Password:</h3>
                <input value={this.state.password} placeholder='Password' onChange={e => this.handlePassword(e)} />
                <button onClick={() => this.handleLogin()}>Login</button>
                <button onClick={() => this.handleRegister()}>Register</button>
            </div>
        )
    }
}


export default connect(null,{updateUser})(Auth)