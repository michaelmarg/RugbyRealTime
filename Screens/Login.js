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

 import { TextField } from 'react-native-material-textfield';
 import db from '../database';
 let SQLite = require('react-native-sqlite-storage');

 export default class Login extends React.Component {

   constructor(props) {
        super(props)

        this.state = {
          username: null,
          password: null,

        }
    }


      render(){
        const{navigate} = this.props.navigation;
        return(
          <ImageBackground style={styles.Rugby} source = {require('../images/Welcome.jpg')}>
              <TextField
              style = {styles.textstyle}
              label="Username"
              onChangeText = {(username) => this.setState({username})}
              returnKeyType="next"
              />
              <TextField
              style = {styles.textstyle}
              label="Password"
              onChangeText = {(password) => this.setState({password})}
              secureTextEntry
              returnKeyType="next"
              />
              <Button onPress ={() => this.checkCredentials()} title = "Login"></Button>
          </ImageBackground>







          );

      }
      checkCredentials() {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM user WHERE username=?', [this.state.username], (tx, results) => {
          var len = results.rows.length;
          console.log("len " + len);
          if(len > 0) {
            var row = results.rows.item(0);
            if(this.state.password == row.password){
              this.props.navigation.navigate('PreGame', { username: this.state.username });
            } else {
              console.log("Login details are not correct")
            }
          } else {
            console.log("Login details are not correct")
          }
        });
      })
    }
}
const styles = StyleSheet.create({
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
});
