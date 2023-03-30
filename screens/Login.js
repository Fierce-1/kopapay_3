import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import App_icon from '../components/logo';
import PasswordInput from '../components/password';
import Phone_Box from '../components/phoneNumberTextInput';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [countryCode, setCountryCode] = React.useState('KE');
  const [password, setPassword] = React.useState('');

  const inputCode = (country) => {
    setCountryCode(country.cca2);
  };
  const logo =  require("../assets/images/kopapayBlack.png");
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.mainView}
    >
      <View style={styles.logoView}>
        <App_icon img={logo}/>
      </View>

      <View style={styles.textInputView}>
        <View style={{ width: '80%' }}>
          <Text style={styles.text}>Phone Number</Text>
                    
          {/* here we created phone input box that contain country code and number  and it compnent is in components folder  and name is phoneNumberTextInput*/}
          <Phone_Box
            placeHolderColor="#AF9999"
            styleInput={styles.textInput}
            code={countryCode}
            phone={phoneNumber}
            inputCode = {inputCode}
            inputPhone = {setPhoneNumber}
            container={styles.container}
            countryPicker={styles.countryPicker}
            placeholder="7xxxxxxxx"
            
          />
          <Text style={styles.text}>Password</Text>

          {/* here we created password input box  and it compnent is in components folder and name is password*/} 
          <PasswordInput
            placeHolderColor="#AF9999"
            pass={password}
            input={setPassword}
            placeholder="Input Password"
            styleInput={styles.inputStyle}
          />
        </View>

        {/* here we created button that will make it move to Home page of app*/}
        <View style={{ margin: '10%' }}>
          <TouchableOpacity style={styles.buttonStyle} 
          onPress={()=>{

            if (phoneNumber.length === 9 && password.length === 4){
              navigation.navigate('kopa_pay_home')
            }
            else{
              if (phoneNumber.length !== 9 ){
                Alert.alert(
                  'Phone Number Must be 9 digits',
                );
              }
              else{
                Alert.alert(
                  'Password Must only be 4 characters',
                );
              }
            }

          }}>
            <FontAwesome name="arrow-right" size={22} color="white" />
          </TouchableOpacity>
        </View>

        {/* This contain forget password and signup and on clicking signup move to signup page*/}
        <View style={styles.lastView}>
          <Text style={styles.forgetPass} onPress={()=> navigation.navigate('reset')}>Forget Password</Text>
          <Text style={styles.Signup} onPress={() => navigation.navigate('signup')}>Sign up »</Text>
        </View>
      </View>

      {/* for link at the end*/}
      <View>
        <Text style={styles.lowercaption}>Powered by www.kopapay.com</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
    mainView:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor: '#F4FFFE'
    },
    logoView:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    logoStyle:{
        height: windowHeight * 0.2, 
        width: windowWidth * 0.2
    },
    textInputView:{
        flex: 3,
        width:'100%',
        alignItems:'center'
        
    },
    inputStyle: {
        backgroundColor: 'white',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:'4%',
        elevation: 5,
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 5,
        marginBottom:15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    countryPicker: {
        padding: 5,
        paddingRight: 10,
    },
    textInput: {
        flex: 1,
        padding: 5,
        color:'black'
    },
    text:{
        color:'black',
        fontWeight:'bold',
        fontSize:14,
        marginBottom:10,
        fontFamily: 'Montserrat'
    },
    buttonStyle:{
        backgroundColor:'#3467FF',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100
    },
    lastView:{
        flexDirection:'row',
        alignItems:'center',
        width:'80%',
        justifyContent:'space-between'
    },
    forgetPass:{
        color:'#AF9999',
        fontSize:14,
        fontWeight:'bold',
        fontFamily: 'Montserrat',
    },
    Signup :{
        color:'#3467FF',
        fontSize:24,
        fontWeight:'bold',
        fontFamily: 'Montserrat'
    },
    lowercaption:{
        color:'#9A9999',
        fontSize:14,
        fontWeight:'bold',
        fontFamily: 'Montserrat'
    }
})