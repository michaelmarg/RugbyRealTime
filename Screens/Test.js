import React, {Component} from 'react';
import firebase from '@firebase/app';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Alert,
  ScrollView,
  Navigator
 } from 'react-native';
const util = require('util');
import PureChart from 'react-native-pure-chart';
import FileSystem from 'react-native-filesystem';
require('@firebase/database');




//Writing the information to the cloud
export default class Test extends React.Component
{
  writeUserData(ForwardLineBreakFailure,ForwardLineBreakSuccess,BackTurnoverSuccess,BackTurnoverFailure,ForwardTurnoverSuccess,ForwardTurnoverFailure,BackBoxSuccess,BackBoxFailure,BackLineBreakSuccess,BackLineBreakFailure,Boxkick,Linebreak,Turnover,Offside,first22,second22,third22,fourth22,venue,date,opposition){
    firebase.database().ref(this.state.opposition).set({
        ForwardLineBreakFailure,
        ForwardLineBreakSuccess,
        BackTurnoverSuccess,
        BackTurnoverFailure,
        ForwardTurnoverSuccess,
        ForwardTurnoverFailure,
        BackBoxSuccess,
        BackBoxFailure,
        BackLineBreakSuccess,
        BackLineBreakFailure,
        Boxkick,
        Linebreak,
        Turnover,
        Offside,
        first22,
        second22,
        third22,
        fourth22,
        venue,
        date,

    }).then((data)=>{
        //success callback
        console.log('data ' , this.state.opposition)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}





	constructor(props){

		super(props)
		this.state = {
			Boxkick: this.props.navigation.state.params.Boxkick,
			Linebreak: this.props.navigation.state.params.Linebreak,
			offside: this.props.navigation.state.params.offside,
			turnover: this.props.navigation.state.params.turnover,
			first22: this.props.navigation.state.params.first22,
			second22: this.props.navigation.state.params.second22,
			third22: this.props.navigation.state.params.third22,
			fourth22: this.props.navigation.state.params.fourth22,
			BackLineBreakSuccess: this.props.navigation.state.params.BackLineBreakSuccess,
			BackLineBreakFailure: this.props.navigation.state.params.BackLineBreakFailure,
			ForwardLineBreakSuccess: this.props.navigation.state.params.ForwardLineBreakSuccess,
			ForwardLineBreakFailure: this.props.navigation.state.params.ForwardLineBreakFailure,
			BackBoxFailure: this.props.navigation.state.params.BackBoxFailure,
			BackBoxSuccess: this.props.navigation.state.params.BackBoxSuccess,
			BackTurnoverSuccess: this.props.navigation.state.params.BackTurnoverSuccess,
			ForwardTurnoverSuccess: this.props.navigation.state.params.ForwardTurnoverSuccess,
			BackTurnoverFailure: this.props.navigation.state.params.BackTurnoverFailure,
			ForwardTurnoverFailure: this.props.navigation.state.params.ForwardTurnoverFailure,
			eventsFirst:this.props.navigation.state.params.eventsFirst,
			eventsSecond:this.props.navigation.state.params.eventsSecond,
			eventsThird:this.props.navigation.state.params.eventsThird,
			eventsFourth:this.props.navigation.state.params.eventsFourth,
      opposition:this.props.navigation.state.params.opposition,
      date:this.props.navigation.state.params.date,
      venue:this.props.navigation.state.params.venue,
      teamselect:this.props.navigation.state.params.teamselect,
		}
	}


    render(){



    	var sampleData = [{seriesName: 'series1', data: [{x: 'First 22', y: this.state.first22}, {x: 'Second 22', y: this.state.second22}, {x: 'Third 22', y: this.state.third22}, {x: 'Fourth 22', y: this.state.fourth22}], color: 'blue'}]
    	var sampleData1 = [{seriesName: 'series1', data: [{x: 'Boxkick', y: this.state.Boxkick}, {x: 'Linebreak', y: this.state.Linebreak},{x: 'Offside', y: this.state.offside},{x: 'Turnover', y: this.state.turnover}], color: 'blue'}]
    	var sampleData2 = [{seriesName: 'series1', data: [{x: 'Backs', y: this.state.BackLineBreakSuccess}, {x: 'Forwards', y: this.state.ForwardLineBreakSuccess}] ,color:'green',label:'Linebreak Success'}]
    	var sampleData5 = [{seriesName: 'series1', data: [{x: 'Backs', y: this.state.BackLineBreakFailure}, {x: 'Forwards', y: this.state.ForwardLineBreakFailure}] ,color:'red',label:'Linebreak Failure'}]
    	var sampleData3 = [{seriesName: 'series1', data: [{x: 'Backs', y: this.state.BackTurnoverSuccess}, {x: 'Forwards', y: this.state.ForwardTurnoverSuccess}] ,color:'green',label:'Turnover Success'}]
    	var sampleData6 = [{seriesName: 'series1', data: [{x: 'Backs', y: this.state.BackTurnoverFailure}, {x: 'Forwards', y: this.state.ForwardTurnoverFailure}] ,color:'red',label:'Turnover Failure'}]
    	var sampleData4 = [{seriesName: 'series1', data: [{x: 'Success', y: this.state.BackBoxSuccess},{x: 'Failure', y: this.state.BackBoxFailure}] ,color:'pink'}]




    	const { navigate } = this.props.navigation;
    	return(


	    				<ScrollView style = {styles.statsview}>






                              <View>
                                  <Text style = {styles.details}> Your Team:{this.state.teamselect} </Text>
                                  <Text style = {styles.details}> Opposition:{this.state.opposition} </Text>
                                  <Text style = {styles.details}> Venue:{this.state.venue} </Text>
                                  <Text style = {styles.details}> Date:{this.state.date} </Text>
                                  <Text>                                        </Text>
                                   <Text> The Events in the first 22 were  {this.state.eventsFirst}</Text>
                                   <Text>                   </Text>
                                   <Text> The Events in the second 22 were {this.state.eventsSecond}</Text>
                                   <Text>                   </Text>
                                   <Text> The Events in the third 22 were {this.state.eventsThird}</Text>
                                   <Text>                   </Text>
                                   <Text> The Events in the fourth 22 were  {this.state.eventsFourth}</Text>
                              </View>

                              <View>

                              	   <Text style = {styles.TextStyle}>Action Areas</Text>
	                               <PureChart data={sampleData} width={'100%'} type='bar' />
	                               <Text style = {styles.TextStyle}>Total Events</Text>
	                               <PureChart data={sampleData1} width={'100%'} type='bar' />
	                               <Text style = {styles.TextStyle}>Linebreak success</Text>
	                               <PureChart data={sampleData2} width={'100%'} type='bar' />
	                               <Text style = {styles.TextStyle}>Linebreak Failure</Text>
	                               <PureChart data={sampleData5} width={'100%'} type='bar' />
	                               <Text style = {styles.TextStyle}>Turnover Success</Text>
	                               <PureChart data={sampleData3} width={'800%'} type='bar' />
	                               <Text style = {styles.TextStyle}>Turnover Failure</Text>
	                               <PureChart data={sampleData6} width={'800%'} type='bar' />
	                               <Text style = {styles.TextStyle}>Kick Success/Failure</Text>
	                               <PureChart data={sampleData4} width={'100%'} type='bar' />
                                 {this.writeUserData(this.state.ForwardLineBreakFailure,this.state.ForwardLineBreakSuccess,this.state.BackTurnoverSuccess,this.state.BackTurnoverFailure,this.state.ForwardTurnoverSuccess,this.state.ForwardTurnoverFailure,this.state.BackBoxSuccess,this.state.BackBoxFailure,this.state.BackLineBreakSuccess,this.state.BackLineBreakFailure,this.state.Boxkick,this.state.Linebreak,this.state.turnover,this.state.offside,this.state.first22,this.state.second22,this.state.third22,this.state.fourth22,this.state.venue,this.state.date)}
                              </View>
	    				</ScrollView>

    		);
    }


}

var styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    position:'absolute'
  },
  TextStyle: {
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  statsview: {
    left:30
  },
  details: {
    fontWeight:'bold'
  }
})
