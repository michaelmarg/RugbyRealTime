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

 export default class Register extends React.Component {

   constructor(props) {
        super(props)

        this.state = {
          username: null,
          password: null,
          passwordConfirm: null,

        }
    }


      render(){
        const{navigate} = this.props.navigation;
        return(
          <ImageBackground style={styles.Rugby} source = {require('../images/Welcome.jpg')}>
              <TextField
              label="Username"
              onChangeText = {(username) => this.setState({username})}
              returnKeyType="next"
              />
              <TextField
              label="Password"
              onChangeText = {(password) => this.setState({password})}
              secureTextEntry
              returnKeyType="next"
              />
              <TextField
              label="Confirm password"
              onChangeText = {(passwordConfirm) => this.setState({passwordConfirm})}
              secureTextEntry
              returnKeyType="next"
              />
              <Button onPress = {() => this.register()} title = "Register"></Button>
          </ImageBackground>







             );

      }
       register() {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM user WHERE username=?', [this.state.username], (tx, results) => {
            console.log("Query completed");
            var len = results.rows.length;
            if(len == 0){
                if(this.state.password == this.state.passwordConfirm){
                    console.log('here');
                    console.log("password" + this.state.password);
                    db.transaction((tx) => {
                        tx.executeSql('insert into user(username, password) values(?,?)', [this.state.username, this.state.password]);
                        tx.executeSql('SELECT * FROM user', [], (tx, results) => {
                        console.log("Query completed");
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            console.log('Users: ', row);
                        }
                        });
                    })
                    console.log("User succesfully registered")
                } else {
                    console.log("Passwords are not the same")
                }
            } else {
                console.log("user already exists");
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

  },
});
