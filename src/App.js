import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js'
import { CSVLink } from "react-csv";
import {PieChart,BarChart,AreaChart} from 'react-easy-chart'
import victory from "victory";
import {Doughnut} from 'react-chartjs-2';
class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    oppositionTeam:'',
    Team:[],
    Boxkick:"hELLO",
    value:'',
    value1:'',
    Events2:[]
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleKey = this.handleKey.bind(this);
}

//the opposition the manager has inputed
handleChange(event) {
   this.setState({value: event.target.value});
}
//Manager presses enter save the opposition send it to get info
handleKey(e) {
    if (e.key === "Enter") {
      this.DisplayTeamDetails()
    }
}

//Getting information related to the particular opposition
DisplayTeamDetails(){
console.log(this.state.value)
const rootRef = firebase.database().ref();// for getting communication with firebase
const post = rootRef.child(this.state.value + '/') //for example Munster/
    post.on('value', snap => {
        let team = snap.val() //make team variable store information related to that particular opposition
        let newState = []
        this.setState({Team:team});// store the variable in the Team array
    })
}
render() {
  return (
    <div>
    <h3>RUGBY REAL TIME WEB APPLICATION</h3>
    <h2> Enter the opposition you are playing: </h2>
    <h2>&nbsp;</h2>
    <div id = "input">
        <input
          type="Enter the opposition"
          value={this.state.value} //opposition manager enters
          onChange={this.handleChange}
          onKeyUp={this.handleKey}
        />

    </div>
        <h2> Opposition: {this.state.value}</h2>
        <h2> Location: {this.state.Team.venue}</h2>
        <h2> Date: {this.state.Team.date}</h2>
        <h2> Events in the First 22: {this.state.Team.first22}</h2>
        <h2> Events in the Second 22 :{this.state.Team.second22}</h2>
        <h2> Events in the Third 22: {this.state.Team.third22}</h2>
        <h2> Events in the Fourth 22: {this.state.Team.fourth22}</h2>
        <h2> The number of Offsides are: {this.state.Team.Offside} </h2>
        <h2> The number of Linbreaks are: {this.state.Team.Linebreak} </h2>
        <h2> The number of Turnovers are: {this.state.Team.Turnover} </h2>
        <h2> The number of Kicks are: {this.state.Team.Boxkick} </h2>
        <h2> Forwards successful Turnovers : {this.state.Team.ForwardTurnoverSuccess} </h2>
        <h2> Forwards not successful Turnovers : {this.state.Team.ForwardTurnoverFailure} </h2>
        <h2> Forwards successful Linebreaks : {this.state.Team.ForwardLineBreakSuccess} </h2>
        <h2> Forwards not successful Linebreaks : {this.state.Team.ForwardLineBreakFailure} </h2>
        <h2> Back successful Turnovers : {this.state.Team.BackTurnoverSuccess} </h2>
        <h2> Back not successful Turnovers: {this.state.Team.BackTurnoverFailure} </h2>
        <h2> Back successful Linebreaks : {this.state.Team.BackLineBreakSuccess} </h2>
        <h2> Back not successful Linebreaks: {this.state.Team.BackLineBreakFailure} </h2>
        <h2> Succesful Kick/Chase: {this.state.Team.BackBoxSuccess} </h2>
        <h2> not succesful Kick/Chase: {this.state.Team.BackBoxFailure} </h2>
        <div>
        <div id = "charts">
        <h2> Action Areas </h2>
        <BarChart
        axes
        colorbars
        data={[
         {x: 'First22', y: this.state.Team.first22, color: 'orange'},
         {x: 'Second22', y: this.state.Team.second22,color: 'green'},
         {x: 'Third22', y: this.state.Team.third22,color: 'yellow'},
         {x: 'Fourth22', y: this.state.Team.fourth22,color: 'blue'},
        ]}
        />
        <h2> Forward Turnovers </h2>
        <BarChart
        axes
        colorbars
        data={[
         {x: 'Forward turnover success', y: this.state.Team.ForwardTurnoverSuccess, color: 'green'},
         {x: 'Forward turnover failure', y: this.state.Team.ForwardTurnoverFailure,color: 'red'},
        ]}
        />
        <h2> Forward Linebreaks </h2>
        <BarChart
        axes
        colorbars
        data={[
         {x: 'Forward Linebreak success', y: this.state.Team.ForwardLineBreakSuccess, color: 'green'},
         {x: 'Forward Linebreak failure', y: this.state.Team.ForwardLineBreakFailure, color: 'red'},
        ]}
        />
        <h2> Back Linebreaks </h2>
        <BarChart
        axes
        colorbars
       data={[
         {x: 'Back Linebreak success', y: this.state.Team.BackLineBreakSuccess, color: 'green'},
         {x: 'Back Linebreak failure', y: this.state.Team.BackLineBreakFailure, color: 'red'},
       ]}
        />
        <h2> Back Turnovers </h2>
        <BarChart
        axes
        colorbars
       data={[
         {x: 'Back Turnover success', y: this.state.Team.BackTurnoverSuccess, color: 'green'},
         {x: 'Back Turnover failure', y: this.state.Team.BackTurnoverFailure, color: 'red'},
       ]}
        />
        <h2> Events Breakdown </h2>
        <BarChart
        axes
        colorbars
       data={[
         {x: 'Kick/Chase', y: this.state.Team.Boxkick, color: 'orange'},
         {x: 'Offsides', y: this.state.Team.Offside,color: 'green'},
         {x: 'Linebreaks', y: this.state.Team.Linebreak,color: 'yellow'},
         {x: 'Turnovers', y: this.state.Team.Turnover,color: 'blue'},
       ]}
        />
        <h2> Kick / Chase </h2>
        <BarChart
        axes
        colorbars
       data={[
         {x: 'Kick/Chase success', y: this.state.Team.BackBoxSuccess, color: 'green'},
         {x: 'Kick/Chase failure', y: this.state.Team.BackBoxFailure, color: 'red'},
       ]}
        />

        </div>
      </div>
      <div id = "csv">
          <CSVLink data={[this.state.Team]} separator={'\n'}>
          Download Game Data
          </CSVLink>
        </div>
    </div>
  );
}
}

export default App;
