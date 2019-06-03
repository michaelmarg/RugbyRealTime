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

export default class PreGame extends React.Component {
   constructor(props) {
    super(props)

    this.state = {
        username: this.props.navigation.state.params.username,
     }
  }
  render(){
    const{navigate} = this.props.navigation;

      return(

              <ImageBackground style={styles.Rugby} source = {require('../images/Welcome.jpg')}>
              <Text style = {styles.welcome}> Welcome : {this.state.username}</Text>
              <Text>               </Text>
              <Button onPress = {() => navigate("GameInfo")} style = {styles.buttons} title = "Start the game?"></Button>
              <Text>     </Text>
              <Text>     </Text>
              <Button onPress = {() => navigate("Welcome")} title = "Log Out?"></Button>
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
    top:100,
    left:100
  },
  buttons:{
    fontSize: 20,
    top:100,
    left:50,
    backgroundColor:'white',
    width:'50%'
  },
  Rugby:{
    flex:1,
    width:null,
    height:null,
    justifyContent:'center',
    resizeMode: 'cover'

  },
  details:{
    top:70,
  }
});
