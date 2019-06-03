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
  Dimensions
 } from 'react-native';
 import { StatusBar } from 'react-native';

 export default class Welcome extends Component {
   constructor(props) {
    super(props)

    this.state = {
      username: null
    }
  }


  render(){
    const{navigate} = this.props.navigation;

    return(
          <ImageBackground style={styles.Rugby} source = {require('../images/RugbyBackground.png')}>
          <StatusBar hidden={true} />
              <Text style = {styles.welcome}> RUGBY REAL TIME APPLICATION</Text>
              <Button onPress = {() => navigate("Login")} style = {styles.buttons} title = "Login?"></Button>
              <Text>.....</Text>
              <Text>.....</Text>
              <Text>.....</Text>
              <Button onPress = {() => navigate("Register")}style = {styles.buttons} title = "Register?"></Button>
          </ImageBackground>



      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  welcome:{
    color:'white',
    fontSize: 20,
    top:100,
    left:50,
    fontWeight: 'bold',
    position: 'absolute'
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

  }
});
