/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text, TextInput,Button,
  StatusBar,TouchableHighlight, Image, 
  TouchableOpacity, TouchableNativeFeedback, 
  TouchableWithoutFeedback,
} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// const MainNavigator = createStackNavigator({
//   Home: {screen: App},
//   Second: {screen: SecondScreen},
// });
//  const Apply = createAppContainer(MainNavigator);
 
export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
 
 
  render(){
    // const gradient = "linear-gradient(-225deg, #231557 0%, #44107A 29%)";
    // const {navigate} = this.props.navigation;
  return (
  <View style={style.container}>
  <View style={style.topImage}>
    <Image source={require('./logo1.png')} style={{height:100, width: 100,alignSelf:"center",marginTop:100}}/>
    <Text style={style.registerImage} >Register</Text>

  </View>
  <View style={style.formContainer}>
    <View style={style.fullName}>
      <Image source={require('./human_ico.png')} style={{height:20, width: 20,margin:15}} />
      <TextInput placeholder=" full name" style={style.textInput} />
    </View >
    <View style={style.fullName}>
    <Image source={require('./email.png')} style={{height:20, width: 20,margin:15}} />

      <TextInput placeholder=" email" style={style.textInput} />
    </View>
    <View style={style.fullName}>
    <Image source={require('./phone.png')} style={{height:20, width: 20,margin:15}} />

      <TextInput placeholder=" phone number" style={style.textInput}/>
    </View>
    <View style={style.fullName}>
    <Image source={require('./key1.png')} style={{height:20, width: 20,margin:15}} />
      <TextInput placeholder=" password" style={style.textInput} />
    </View>
    <TouchableNativeFeedback 
    // onPress={() => navigate('SecondScreen', {name: 'Jane'})}
    >
    <View style={style.button} >
      <Text style={style.buttonRegister} >REGISTER</Text>
      </View>
      </TouchableNativeFeedback>
  </View>
  <View style={style.loginPhrase}>
    <Text>
      Already have an account? 
    </Text>
    <Text style={{color:"orange"}}>
              Login
    </Text>
  </View>



  </View>
  )}
}
// export default Apply;
const style= StyleSheet.create({
   
  container:{
    flex: 1,

    flexDirection:"column",
  },
  topImage:{
      backgroundColor: "orange",
      borderBottomLeftRadius: 100,

    height: 300,
  
  
  },
  formContainer:{
    padding: 50,
    flexDirection: "column",

  },
  registerImage:{
    color: "white",
    fontSize: 20,
    
    alignSelf: "flex-end",
    marginTop: 250,
    marginRight: 50,
  },
  fullName:{
    borderRadius: 20,
    backgroundColor: "white",
    flexDirection: "row",
    elevation:6,
    shadowColor: "grey",
    shadowRadius: 15,
    marginBottom: 20,
  },
  button:{
    borderRadius: 20,
    backgroundColor: "orange",
    elevation:6,
    height: 50,
    shadowColor: "grey",
    marginTop: 30,

  },
  buttonRegister:{
  textAlignVertical:"center",
  textAlign:"center",
    color:"white",
    marginTop: 10

  },
  loginPhrase:{
    flexDirection: "row",
   justifyContent:"center",
    

  },
  textInput:{
    width: 200
  }

  });



