import React from 'react';
import './Style.css';
import Cookie from "js-cookie"
import { Table, } from 'react-bootstrap';
import Attendence from './Attendence'
import Header from './Components/Header'
export default class Home extends React.Component {
    constructor(props) {
        super(props);

        console.log("props", this.props.location.state.userdetail);
        this.state = {
            curTime: new Date().toLocaleString(),
            Attendence: [],
        }
        this.ClockIn = this.ClockIn.bind(this);
        this.ClockOut = this.ClockOut.bind(this);
        this.AttendenceDetails = this.AttendenceDetails.bind(this);
    }
    ClockIn = () => {
        let data = {
            TypeOfPunch: "MANUAL",
            InOut: true,
            PunchDate: this.state.curTime,
            TimeZone: "GMT+0530",
            DeviceId: "20f92db09fe783a6",
            modelName: "samsungSM-G531H",
            osName: "Android",
            systemVersion: "5.1.1",
            appVersion: "1.4.0",
            locations: [{ "GeoCordinateX": 10.0462316, "GeoCordinateY": 76.3172228 }],
            IsOnline: true,
            isGPS: false,
            isWIFI: true,
            isBeacon: false,
            isFingerPrint: false
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'AccessToken': Cookie.get("accesstoken")
            },
            body: JSON.stringify(data)

        };
        console.log("dattaaaaaaaaa", JSON.stringify(data))
        fetch('http://workforceapi.com/workforceApi1/api/updateUserLocation',
            requestOptions)
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'res JSON');
                if (responseJson.status == "1") {
                    alert("Clock In Successfully");
                }
            })
    }
    ClockOut = () => {
        let data = {
            TypeOfPunch: "MANUAL",
            InOut: false,
            PunchDate: this.state.curTime,
            TimeZone: "GMT+0530",
            DeviceId: "20f92db09fe783a6",
            modelName: "samsungSM-G531H",
            osName: "Android",
            systemVersion: "5.1.1",
            appVersion: "1.4.0",
            locations: [{ "GeoCordinateX": 10.0462316, "GeoCordinateY": 76.3172228 }],
            IsOnline: true,
            isGPS: false,
            isWIFI: true,
            isBeacon: false,
            isFingerPrint: false
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'AccessToken': Cookie.get("accesstoken")
            },
            body: JSON.stringify(data)

        };
        fetch('http://workforceapi.com/workforceApi1/api/updateUserLocation',
            requestOptions)
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'res JSON');
                if (responseJson.status == "1") {
                    alert("Clock Out Successfully");
                }

            })
    }
    AttendenceDetails = () => {
        let data = {
            PunchDate: "6/25/2020",
            userId: "113"
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'AccessToken': Cookie.get("accesstoken")
            },
            body: JSON.stringify(data)

        };
        fetch('http://workforceapi.com/workforceApi1/api/getAttendenceLog',
            requestOptions)
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson.response, 'res JSON');
                this.setState({ Attendence: responseJson.response });
                this.props.history.push({ pathname: '/Attendence', state: { AttendenceData: responseJson.response } })
            })
    }

    render() {
        console.log("ATTENDENCS", this.state.Attendence);
        return (
            <div className="app-container app-theme-white body-tabs-shadow">
                <Header />
                <div className="containertable">
                    <h2>USER PROFILE</h2>
                    <Table striped bordered hover size="sm">
                        <tr>
                            <th>Employee Name</th>
                            <td>{this.props.location.state.userdetail.EmployeeName}</td>
                        </tr>
                        <tr>
                            <th>Mobile</th>
                            <td>{this.props.location.state.userdetail.Mobile}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{this.props.location.state.userdetail.Email}</td>
                        </tr>
                        <tr>
                            <th><button onClick={() => this.ClockIn()}> CLOCK IN</button></th>
                            <td><button onClick={() => this.ClockOut()}> CLOCK OUT</button></td>
                        </tr>

                    </Table>
                    <div>
                        <button onClick={() => this.AttendenceDetails()} >View Attendence Details</button>
                    </div>
                    <div>

                    </div>

                </div>

            </div>

        )
    }
}
/* <div>
                        {this.state.Attendence.map((object, i) => <li key={i}>PunchDate:{object.PunchDate}</li>)}
                    </div>*/