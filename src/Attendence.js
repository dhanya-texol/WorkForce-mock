import React from 'react'
import { Table, } from 'react-bootstrap';
import './Style.css'
import Header from './Components/Header'
export default class Attendence extends React.Component{
constructor(props){
super(props);
console.log(this.props.location.state.AttendenceData)}
inout=(item)=>{
if(item){return(
<td style={{backgroundColor:'#1baa62',width:'80px'}}>IN</td>
)
}
else{
return(
<td style={{backgroundColor:'#aa1b32',width:'80px'}}>OUT</td>
)

}
}
render(){

return(
<div className="app-container app-theme-white body-tabs-shadow">
<Header/>
<div className="containertable">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>PunchDate</th>
      <th>InOut</th>  
    </tr>
  </thead>
  <tbody>
  {this.props.location.state.AttendenceData.map((object, i) =>(
    <tr>
      <td>{object.PunchDate}</td>
      <td>{this.inout(object.InOut)}</td>
    </tr>
  )
 )}
  </tbody>
</Table>
</div>
</div>)}}