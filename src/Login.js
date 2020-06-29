import React from 'react'
import './Style.css';
import { Button } from 'react-bootstrap';
import Cookie from "js-cookie"
export default class Login extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        username: '',
                        password: '',
                };
                this.handleChange = this.handleChange.bind(this);
                this.login = this.login.bind(this);
        }
        handleChange(event) {
                this.setState({
                        [event.target.name]: event.target.value
                });
        }

        login = () => {
                let data = {
                        user_id: this.state.username,
                        password: this.state.password,
                        language: "sample string 3",
                        DeviceId: "292788c62ef5e2f5",
                        PunchDate: "23-Jun-2020 17:11:38",
                        TimeZone: "GMT+0530",
                        RegistrationNo: "sample string 7"
                }
                const requestOptions = {
                        method: 'POST',
                        headers: {
                                'Content-type': 'application/json',
                        },
                        body: JSON.stringify(data)

                };
                console.log(JSON.stringify(data))
                fetch('http://workforceapi.com/workforceApi1/api/login',
                        requestOptions)
                        .then(response => response.json())
                        .then((responseJson) => {
                                console.log(responseJson, 'res JSON');
                                if (responseJson.status == "1") {
                                        console.log(responseJson);
                                        Cookie.set("accesstoken", responseJson.response.token);
                                        //Cookie.remove('token');
                                        this.props.history.push({ pathname: '/Home', state: { userdetail: responseJson.response.user_details } });
                                        //this.props.history.push('/Home')

                                }
                                else {
                                        alert("Enter valid username and password");
                                }
                        })
                        .catch((error) => {
                                console.error(error);

                        });
        };
        render() {
                return (
                        <div className="app-container app-theme-white body-tabs-shadow">
                                <div className="container">
                                        <h3>WORKFORCE TIME</h3><br />
                                        <form className="formcontainer">
                                                <h3>LOG IN </h3>   <br />
                                                <div className="formitems">
                                                        <input
                                                                type="text"
                                                                onChange={this.handleChange}
                                                                name="username"
                                                                className="form-control"
                                                                placeholder="Enter your Username"
                                                                value={this.state.username}
                                                        />
                                                </div>
                                                <br />
                                                <div>
                                                        <input
                                                                type="password"
                                                                onChange={this.handleChange}
                                                                name="password"
                                                                className="form-control"
                                                                placeholder="Enter your Password"
                                                                value={this.state.password}
                                                        />
                                                </div>
                                                <br />
                                                <div>
                                                        <Button as="input" style={{background:'#3d815f'}} type="submit" onClick={() => this.login()} value="Submit" />
                                                </div>

                                        </form>
                                </div>
                        </div>
                );
        }
}