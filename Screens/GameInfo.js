import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  Navigator,
  ImageBackground,
  Dimensions,
  TextInput
 } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import DatePicker from 'react-native-datepicker'

export default class GameInfo extends React.Component {
  constructor(props) {
   super(props)

   this.state = {
       date:'01-01-2018',
       opposition:'',
       venue:'',
       teamselect:''
    }
 }
  render(){
    const{navigate} = this.props.navigation;


      return(
             <ImageBackground style={styles.Rugby} source = {require('../images/Welcome.jpg')}>
             <Text style = {styles.welcome}> Game details:</Text>
             <Text>               </Text>
             <Text>               </Text>
             <Text>               </Text>
               <TextField
               style = {styles.textstyle}
               label="Enter the opposition"
               onChangeText = {(opposition) => this.setState({opposition})}
               returnKeyType="next"
               />
               <TextField
               style = {styles.textstyle}
               label="Enter your team"
               onChangeText = {(teamselect) => this.setState({teamselect})}
               returnKeyType="next"
               />
               <TextField
               style = {styles.textstyle}
               label="Enter the venue"
               onChangeText = {(venue) => this.setState({venue})}
               returnKeyType="next"
               />
               <DatePicker
               style={{width: 200}}
               date={this.state.date}
               mode="date"
               placeholder="select date"
               format="DD-MM-YYYY"
               minDate="01-01-2018"
               maxDate="12-12-2029"
               confirmBtnText="Confirm"
               cancelBtnText="Cancel"
               onDateChange={(date) => {this.setState({date: date})}}
               />
               <Button onPress = {() => navigate("stats", {opposition:this.state.opposition,venue:this.state.venue,date:this.state.date,teamselect:this.state.teamselect})} style = {styles.buttonstyle} title = "Start Game?"></Button>
             </ImageBackground>



       );
  }

}
const styles = StyleSheet.create({
  welcome:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top:53,
    left:100
  },
  Rugby:{
    flex:1,
    width:null,
    height:null,
    justifyContent:'center',
    resizeMode: 'cover'

  },
  textstyle:{
    color:'white',
    fontSize: 20,
    position: 'absolute',

  },
  buttonstyle:{
    bottom:400,

  },
});
