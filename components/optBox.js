import React,{useEffect, useState} from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Button, Alert } from 'react-native';


const OtpInput = (props) => {

  const SendButton = (props) => {
    const [timer, setTimer] = useState(0);
    const [buttonLabel, setButtonLabel] = useState('Send');
    const [buttonPressed, setButtonPressed] = useState(false);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let interval;
      if (timer > 0) {
        interval = setInterval(() => {
          setTimer(timer - 1);
        }, 1000);
      } else if (buttonPressed === true) {
        setButtonLabel('Resend');
      }
      return () => clearInterval(interval);
    }, [timer]);
  
    const handleSend = () => {
      // handle send logic here
      if (count===0){
        setTimer(60);
      }

      setCount(count+1)
      setButtonPressed(true);
      if (buttonPressed === true && count<5 ){
        setTimer(60);
        Alert.alert(
          'Tips',
          'Please ensure that sender name “KopaPay” is not blocked. \n\nOr dial *456*9*5*#, enter “5” to select “5”: Activate ALL promo messages”, enter “1”to select “1: Yes”. \n\nThen you can receive messages from app.'
        );
        
      }
      else if (count>4){
        Alert.alert(
          'Tips',
          'Can not send Code'
        );
      }
    };
  
    return (
      <TouchableOpacity style={styles.sendButtton} onPress={handleSend} disabled={timer > 0}>
        <Text style={styles.buttonText}>{buttonLabel} {buttonPressed && `(${timer})`}</Text>
      </TouchableOpacity>
    );
  };
  
  
  
  


  return (
    <View style={props.styleInput}>
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeHolderColor}
            onChangeText={props.input}
            value={props.pass}
        />
        <SendButton sendButtton={styles.sendButtton} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color:'black'
  },
  sendButtton:{
    borderColor:'#BAAAAA',
    borderWidth:1,
    backgroundColor:'#FEF0F0',
    padding:5,
    marginRight:15
  },
  buttonText:{
    color:'#AF9999',
    fontSize:18,
    fontWeight:'bold',
    fontFamily: 'Montserrat'
    }
});

export default OtpInput;
