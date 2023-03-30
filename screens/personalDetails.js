import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import App_icon from '../components/logo';
import Input_Box from '../components/textInput';
import Date_Box from '../components/date';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PersonalDetails = ({navigation}) => {
  const [firstname, setfirstname] = React.useState('');
  const [lastname, setlastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState('male');
  const [date, setDate] = React.useState(new Date())
  const [Location, setLocation] = React.useState('');

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
          <Text style={styles.text}>First name</Text>
                    
          {/* here we created phone input box that will took first name*/}
          <Input_Box
            styleInput={styles.inputStyle}
            placeholder="Enter first name"
            input={setfirstname}
            placeHolderColor = "#AF9999"      
          />

          {firstname.length === 0 && (
              <Text style={styles.textStyling('#F11010')}>First name is required</Text>
          )}

          <Text style={styles.text}>Last name</Text>

          {/* here we created phone input box that will took last name*/}
          <Input_Box
            styleInput={styles.inputStyle}
            placeholder="Enter last name"
            input={setlastname}
            placeHolderColor = "#AF9999"      
          />

          {lastname.length === 0 && (
              <Text style={styles.textStyling('#F11010')}>Last name is required</Text>
          )}

          <Text style={styles.text}>Email</Text>

          {/* here we created phone input box that will took email*/}
          <Input_Box
            styleInput={styles.inputStyle}
            placeholder="Enter Email"
            input={setEmail}
            placeHolderColor = "#AF9999"      
          />

          {email.length === 0 && (
              <Text style={styles.textStyling('#F11010')}>Email is required</Text>
          )}

        <Text style={styles.text}>Gender</Text>        
        
        <View style={styles.dropDownWrapper}>
          <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              style={styles.dropDownStyle}
              mode="dropdown"
              dropdownIconColor="#AF9999"
          >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
          </Picker>
        </View>

          <Text style={styles.text}>Date of Birth</Text>

          <Date_Box 
            input={setDate}
          />
          
          {new Date("2023-01-01") < date && (
              <Text style={styles.textStyling('#F11010')}>Age must be greater than 18</Text>
          )}

          <Text style={styles.text}>Location</Text>

          <Input_Box
            styleInput={styles.inputStyle}
            placeholder="Enter Location"
            input={setLocation}
            placeHolderColor = "#AF9999"      
          />

          {Location.length === 0 && (
              <Text style={styles.textStyling('#F11010')}>Location is required</Text>
          )}

          <Text style={styles.text}>(Optional)</Text>

          <Input_Box
            styleInput={styles.inputStyle}
            placeholder="Enter Referral Number ie 7########"
            input={setEmail}
            placeHolderColor = "#AF9999"      
          />
        </View>

        {/* here we created button that will make it move to Home page of app*/}
        <View style={{ margin: '5%' }}>
          <TouchableOpacity style={styles.buttonStyle} 
          onPress={()=>{
            if (firstname.length>0 && lastname.length>0 && email.length>0 && selectedValue.length>0 && Location.length>0 ){
              if (new Date("2023-01-01") > date){
                navigation.navigate('kopa_pay_home')
              }

            }
          }}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
    mainView:{
        justifyContent:'center',
        alignItems:'center',
        flexGrow:1,
        backgroundColor: '#F4FFFE',
        minHeight: '100%',
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
        flex: 5,
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
        color:'#000',
        paddingLeft:'4%'
    },
    dropDownStyle: {
      backgroundColor: 'white',
      color: '#AF9999'
    },
    dropDownWrapper: {
      backgroundColor:"white",
      borderRadius: 50,
      overflow: 'hidden',
      height:50,
      elevation: 5,
      marginBottom:10
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