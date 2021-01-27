import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class Login extends React.Component {

    state = {
        credentials:{
            username:'', 
            password:'',
        }
    }

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = () => {
        axiosWithAuth()
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then((res)=>{
                console.log(res)
                localStorage.setItem('token', res.data.payload)
            })
            .catch((res) => {
                console.log(res)
            })
            this.props.history.push('/friendslist')
    }

    render() {
        return(
            <div>
                <h1>Log In!</h1>
                <form onSubmit={this.login}>

                    <input
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />

                    <input
                    type='text'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                        
                    <button>Log in</button>   

                </form>
            </div>

        )
    }


}

export default Login;