import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Platform, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import App_icon from '../components/logo';
import PasswordInput from '../components/password';
import Phone_Box from '../components/phoneNumberTextInput';
import OtpInput from '../components/optBox';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Signup = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [countryCode, setCountryCode] = React.useState('KE');
  const [password, setPassword] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [confirmPassword, setconfirmPassword] = React.useState('');
  const [isSelected, setSelection] = React.useState(false);

  const inputCode = (country) => {
    setCountryCode(country.cca2);
  };
  const logo =  require("../assets/images/kopapayBlack.png");

  return (
    <ScrollView
    contentContainerStyle={styles.mainView}
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


          {phoneNumber.length === 0 && (
              <Text style={styles.textStyling('#F11010')}>Phone number is required</Text>
          )}

          <Text style={styles.text}>OTP</Text>

          <OtpInput 
            placeHolderColor="#AF9999"
            pass={otp}
            input={setOtp}
            placeholder="Input OTP"
            styleInput={styles.inputStyle}
          />
          <Text style={styles.textStyling('black')}>Didn’t receive code? <Text style={styles.textStyling('#05F000')}>Click here.</Text></Text>

          {otp.length === 0 && (
              <Text style={styles.textStyling('#F11010')}>OTP is required</Text>
          )}

          <Text style={styles.text}>Password</Text>

          {/* here we created password input box  and it compnent is in components folder and name is password*/} 
          <PasswordInput
            placeHolderColor="#AF9999"
            pass={password}
            input={setPassword}
            placeholder="Input Password"
            styleInput={styles.inputStyle}
          />

          {password.length === 0 && (
              <Text style={styles.textStyling('#F11010')}>Password is required</Text>
          )}


          <Text style={styles.text}>Confirm Password</Text>

          {/* here we created password input box  and it compnent is in components folder and name is password*/} 
          <PasswordInput
            placeHolderColor="#AF9999"
            pass={confirmPassword}
            input={setconfirmPassword}
            placeholder="Confirm Password"
            styleInput={styles.inputStyle}
          />

          {confirmPassword.length === 0 && (
              <Text style={styles.textStyling('#F11010')}>Password is required</Text>
          )}
        </View>
        {/* This contain forget password and signup and on clicking signup move to signup page*/}
        
        <View style={styles.agreementView}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            tintColors={{ true: 'black', false: 'black' }}
          />
          <Text style={styles.condition}>Agree to the terms and conditions</Text>
        </View>
        {/* here we created button that will make it move to Home page of app*/}
        <View style={{ margin: '5%' }}>
          <TouchableOpacity style={styles.buttonStyle} 
          onPress={() =>
          { 
            if (phoneNumber.length===9 && password.length===4 && otp.length>0 && confirmPassword.length===4){
              if (password === confirmPassword){
                navigation.navigate('person')
              }
              else{
                Alert.alert(
                  'Invalid Password'
                )
              }
            }

          }}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  );
};

export default Signup;

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
        flex: 4,
        width:'100%',
        alignItems:'center'
        
    },
    inputStyle: {
        backgroundColor: 'white',
        borderRadius: 50,        
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:10,
        elevation: 5,
        paddingLeft:'4%'
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 5,
        marginBottom:10,
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
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50
    },
    agreementView:{
      alignItems: 'center',
      flexDirection:'row',
      width:'80%'
    },
    condition:{
        color:'black',
        fontSize:13,
        fontFamily: 'Montserrat',
    },
  buttonText:{
      color:'white',
      fontSize:18,
      fontWeight:'bold',
      fontFamily: 'Montserrat'
  },
  textStyling: (color) =>({
    color: color,
    fontSize:12,
    marginBottom:10,
    fontFamily: 'Montserrat'
  }),

})