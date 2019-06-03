import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Alert,
  Navigator,
  Picker,
  ScrollView
} from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
export default class HelloUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Boxkick:0,
      Linebreak:0,
      Turnover:0,
      a:0,
      b:0,
      c:0,
      d:0,
      count:0,
      BackLineBreakSuccess:0,
      BackLineBreakFailure:0,
      BackBoxFailure:0,
      BackBoxSuccess:0,
      ForwardLineBreakSuccess:0,
      ForwardLineBreakFailure:0,
      ForwardTurnoverSuccess:0,
      ForwardTurnoverFailure:0,
      BackTurnoverSuccess:0,
      BackTurnoverFailure:0,
      player:'',
      event:'' ,
      outcome:'',
      offside:0,
      eventsFirst:[],
      eventsSecond:[],
      eventsThird:[],
      eventsFourth:[],
      opposition:this.props.navigation.state.params.opposition,
      venue:this.props.navigation.state.params.venue,
      date:this.props.navigation.state.params.date,
      teamselect:this.props.navigation.state.params.teamselect,
    }
  }
  Eventresults(param){
    console.log(this.state.date)
    {param == 'Boxkick'? this.EventSet('Boxkick'):null}
    {param == 'Linebreak'? this.EventSet('Linebreak'):null}
    {param == 'Turnover'? this.EventSet('Turnover'):null}
    {param == 'Offside'? this.offsideSet():null}
}

  playerset(param){
    console.log(this.state.player)
  }
  offsideSet(){
    this.setState({
       offside: this.state.offside + 1
    });
  }
  EventSet(param){
    this.setState({event: param})
  }
  outcomeSet(param){
    this.setState({outcome: param})
    console.log(this.state.outcome)

  }
  handleOnPress() {
   this.setState({
       a:this.state.a+1
  });
   this.state.eventsFirst.push(this.state.event)

}
  handleOnPress1() {
    this.setState({
       b:this.state.b+1
  });
    this.state.eventsSecond.push(this.state.event)
}
  handleOnPress2() {
    this.setState({
       c:this.state.c+1
  });
     this.state.eventsThird.push(this.state.event)
}
  handleOnPress3() {
   this.setState({
       d:this.state.d+1
  });
   this.state.eventsFourth.push(this.state.event)
}
handleOnPress4() {
   this.setState({
       BackLineBreakSuccess:this.state.BackLineBreakSuccess+1
  });
  this.setState({
       Linebreak: this.state.Linebreak + 1
    });
}
handleOnPress5() {
   this.setState({
       BackLineBreakFailure:this.state.BackLineBreakFailure+1
  });
   this.setState({
       Linebreak: this.state.Linebreak + 1
    });
}
handleOnPress6() {
   this.setState({
       ForwardLineBreakSuccess:this.state.ForwardLineBreakSuccess+1
  });
   this.setState({
       Linebreak: this.state.Linebreak + 1
    });
}
handleOnPress7() {
   this.setState({
       ForwardLineBreakFailure:this.state.ForwardLineBreakFailure+1
  });
  this.setState({
       Linebreak: this.state.Linebreak + 1
  });

}
handleOnPress8() {
   this.setState({
       BackBoxFailure:this.state.BackBoxFailure+1
  });
  this.setState({
       Boxkick: this.state.Boxkick + 1   //number of Boxkicks
    });
}
handleOnPress9() {
   this.setState({
       BackBoxSuccess:this.state.BackBoxSuccess+1
  });
  this.setState({
       Boxkick: this.state.Boxkick + 1   //number of Boxkicks
  });

}
handleOnPress10() {
   this.setState({
       ForwardTurnoverSuccess:this.state.ForwardTurnoverSuccess+1
  });
  this.setState({
       Turnover: this.state.Turnover + 1   //number of Boxkicks
  });

}
handleOnPress11() {
   this.setState({
       ForwardTurnoverFailure:this.state.ForwardTurnoverFailure+1
  });
  this.setState({
       Turnover: this.state.Turnover + 1   //number of Boxkicks
  });

}
handleOnPress12() {
   this.setState({
       BackTurnoverSuccess:this.state.BackTurnoverSuccess+1
  });
  this.setState({
       Turnover: this.state.Turnover + 1   //number of Boxkicks
  });

}
handleOnPress13() {
   this.setState({
       BackTurnoverFailure:this.state.BackTurnoverFailure+1
  });
  this.setState({
       Turnover: this.state.Turnover + 1   //number of Boxkicks
  });

}
clearSelection(){
  this.setState({player:''});
  this.setState({event:''});
  this.setState({outcome:''});
  Alert.alert('Everything cleared')
}
  FinalOutcome(param,param1,param2){
    {param == 'Back' && param1 == 'Boxkick' && param2 == 'Success'? this.handleOnPress9(): null}
    {param == 'Back' && param1 == 'Boxkick' && param2 == 'Failure'? this.handleOnPress8(): null}
    {param == 'Back' && param1 == 'Linebreak' && param2 == 'Failure'? this.handleOnPress5(): null}
    {param == 'Back' && param1 == 'Linebreak' && param2 == 'Success'? this.handleOnPress4(): null}
    {param == 'Forward' && param1 == 'Linebreak' && param2 == 'Failure'? this.handleOnPress7(): null}
    {param == 'Forward' && param1 == 'Linebreak' && param2 == 'Success'? this.handleOnPress6(): null}
    {param == 'Forward' && param1 == 'Turnover' && param2 == 'Success'? this.handleOnPress10(): null}
    {param == 'Forward' && param1 == 'Turnover' && param2 == 'Failure'? this.handleOnPress11(): null}
    {param == 'Back' && param1 == 'Turnover' && param2 == 'Success'? this.handleOnPress12(): null}
    {param == 'Back' && param1 == 'Turnover' && param2 == 'Failure'? this.handleOnPress13(): null}
    Alert.alert('Everything updated')
  }
   static navigationOptions = {
    title: 'Rugby Real Time',
  };

  render() {
      const{navigate} = this.props.navigation;

  return (
      <View style={{flex: 1}}>
      <MenuProvider styles = {styles.menu}>
                  <Menu styles = {styles.menu} onSelect = {value => {this.setState({player:value})}}>

                    <MenuTrigger>
                    <Text>Select Player</Text>
                    <Text>&#9660;</Text>
                    </MenuTrigger>
                        <MenuOptions style = {styles.menu}>
                          <MenuOption value={"Forward"}>
                            <Text>Forward</Text>
                          </MenuOption>

                          <MenuOption value={"Back"}>
                            <Text>Back</Text>
                          </MenuOption>

                        </MenuOptions>
                    </Menu>
                </MenuProvider>


                <Text> Event </Text>
             <Picker
                selectedValue={this.state.event}
                style={{ height: 50, width: 50}}
                onValueChange={(itemValue, itemIndex) =>
                this.Eventresults(itemValue)
                }>
                <Picker.Item label="Boxkick" value="Boxkick" />
                <Picker.Item label="Linebreak" value="Linebreak" />
                <Picker.Item label="Turnover" value="Turnover" />
                <Picker.Item label="Offside" value="Offside" />

              </Picker>



                <MenuProvider styles = {styles.menu}>
                <Menu styles = {styles.menu} onSelect = {value => {this.setState({outcome:value})}}>

                    <MenuTrigger  >
                    <Text>Select Outcome</Text>
                    <Text>&#9660;</Text>
                    </MenuTrigger  >

                    <MenuOptions style ={styles.menu}>
                    <ScrollView>
                      <MenuOption value={"Success"}>
                        <Text>Success</Text>
                      </MenuOption>

                      <MenuOption value={"Failure"}>
                        <Text>Failure</Text>
                      </MenuOption>
                    </ScrollView>
                    </MenuOptions>
                    </Menu>
                </MenuProvider>



          <View>
            <TouchableOpacity style = {{height:75,backgroundColor: 'lightgreen'}} onPress={this.handleOnPress.bind(this)}>
            <Text>First 22 - Press Here</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{height:75,backgroundColor: 'green'}} onPress={this.handleOnPress1.bind(this)}>
              <Text>Second 22 - Press here </Text>
                 </TouchableOpacity>
            <TouchableOpacity style = {{height:75,backgroundColor: 'lightgreen'}} onPress={this.handleOnPress2.bind(this)}>
              <Text>Third 22 - Press here </Text>
               </TouchableOpacity>
          <TouchableOpacity style = {{height:75,backgroundColor: 'green'}} onPress={this.handleOnPress3.bind(this)}>
            <Text>Fourth 22 - Press here </Text>
             </TouchableOpacity>
        <Button onPress = {() => {
                   Alert.alert(
                  'Update the data?',
                  'Are you sure?',
                  [
                    {text: 'Yes', onPress:() => this.FinalOutcome(this.state.player,this.state.event,this.state.outcome),style: 'cancel'},
                    {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  ],
                  { cancelable: false }
                )
           }}
           title = "Update the data?"
           >
           </Button>
           <Button onPress= {() => navigate("Test",{ Boxkick:this.state.Boxkick, BackLineBreakSuccess:this.state.BackLineBreakSuccess, Linebreak:this.state.Linebreak, first22:this.state.a, second22:this.state.b, third22:this.state.c, fourth22:this.state.d, BackLineBreakFailure:this.state.BackLineBreakFailure, ForwardLineBreakSuccess:this.state.ForwardLineBreakSuccess,ForwardLineBreakFailure:this.state.ForwardLineBreakFailure,BackBoxSuccess:this.state.BackBoxSuccess,BackBoxFailure:this.state.BackBoxFailure, offside:this.state.offside, turnover:this.state.Turnover, BackTurnoverSuccess:this.state.BackTurnoverSuccess,ForwardTurnoverSuccess:this.state.ForwardTurnoverSuccess,BackTurnoverFailure:this.state.BackTurnoverFailure,ForwardTurnoverFailure:this.state.ForwardTurnoverFailure,eventsFirst:this.state.eventsFirst,eventsSecond:this.state.eventsSecond,eventsThird:this.state.eventsThird,eventsFourth:this.state.eventsFourth,opposition:this.state.opposition,date:this.state.date,venue:this.state.venue,teamselect:this.state.teamselect})} title = "View Stats?">
           </Button>
           <Button onPress = {() => {
                      Alert.alert(
                     'Clear Selection?',
                     'Are you sure?',
                     [
                       {text: 'Yes', onPress:() => this.clearSelection(),style: 'cancel'},
                       {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                     ],
                     { cancelable: false }
                   )
              }}
              title = "Clear Selection?"
              >
              </Button>
        </View>
        </View>


    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
   menuContent: {
    flex:1,
    color: "green",
    fontWeight: "bold",
    padding: 2,
    fontSize: 21,
    left:2,
  },
  menu: {
    left:50
  },
});
