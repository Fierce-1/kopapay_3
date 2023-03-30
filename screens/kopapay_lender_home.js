import React, { useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ImageBackground, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import App_text from '../components/text';
import Button from '../components/button';
import App_icon from '../components/logo';
import App_currencyframe from '../components/currecnyframe';
import Dropdown from '../components/pickerdropdown';
import Popup from '../components/modal';
import Drawer_navigator from '../components/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const LenderHome = ({navigation}) =>{

    const [modalVisible, setModalVisible] = useState(false);
    const [text, settext] = useState('');

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const [amount, setAmount] = useState(2000);

    const handleIncreaseAmount = () => {
        if (amount < 100000) {
        setAmount(amount + 10000);
        }
    };

    const handleDecreaseAmount = () => {
        if (amount > 2000) {
        setAmount(amount - 10000);
        }
    };

    const handleSubmitAmount = () => {
        props.onSubmit(amount);
        setAmount(2000);
    };

    const logo = require('../assets/images/kopa.png');
    const image = require("../assets/images/curvedview.jpeg")

    return(
        <ScrollView contentContainerStyle={{}}>
        <View style={styles.container1}>
            {/* <App_text text='hello' textStyle={styles.txt}></App_text> */}
            <View style={styles.container2}>

            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginTop: '10%', marginStart: '10%'}} onPress={() => {navigation.toggleDrawer()}}>
                        <FontAwesome5 name="bars" color='white' size={20}/>
                    </TouchableOpacity>
                
                    <App_icon imgStyle={{marginTop: '5%', marginStart: '28%'}} img={logo}/>
                </View>
                
                    <View style={{marginBottom: '12%', height: '100%'}}> 
                    <App_text textStyle={styles.headingtxt1} text="Make Profits by Lending Others."/>
                    <App_text textStyle={styles.headingtxt2} text = "Easy Withdrawls, 24 Hour Customer Service."/>
                    <Button btnStyle={styles.depositbtn} textStyle={styles.txtbtn } onPress={handleOpenModal} btnText="Deposit" />
                    </View>
                    <Popup visible={modalVisible} onRequestClose={handleCloseModal}>

                        <Text style={styles.modalTitle}>Deposit Amount</Text>
                        <View style={styles.amountContainer}>
                            <TouchableOpacity onPress={handleDecreaseAmount}>
                                <Text style={styles.amountButton}>-</Text>
                            </TouchableOpacity>
                                <TextInput
                                style={styles.amountInput}
                                keyboardType="numeric"
                                value={amount.toString()}
                                onChangeText={(value) => setAmount(value)}
                                />
                            <TouchableOpacity onPress={handleIncreaseAmount}>
                                <Text style={styles.amountButton}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button btnStyle={styles.cancelButton} textStyle={styles.cancelButtonText} btnText="Cancel" onPress={handleCloseModal} />
                            <Button btnStyle={styles.submitButton} textStyle={styles.submitButtonText} btnText="Submit" onPress={handleSubmitAmount} />
                        </View>

                    </Popup>
            </ImageBackground>
                    
            

            </View>
            <View style={styles.container3}>
                <View style={styles.container4}>
                    <View style={styles.container6}>
                        <App_text text='Account Balance' textStyle={styles.txt}></App_text>
                        <App_currencyframe containerStyle={styles.container8} text1="Ksh" text2="70000" currencytxt={styles.currencytxt} amounttxt={styles.amounttxt}></App_currencyframe>
                    </View>
                    <View style={styles.container7}>
                        <View style={styles.container10}>
                            <App_text text='Lending Account' textStyle={styles.txt}></App_text>
                            <App_text text='Balance' textStyle={styles.txt}></App_text>
                        </View>
                        <App_currencyframe containerStyle={styles.container9} text1="Ksh" text2="10000" currencytxt={styles.currencytxt} amounttxt={styles.amounttxt}></App_currencyframe>
                    </View>
                </View>
                <Button btnStyle={styles.withdrawbtn } textStyle={styles.txtbtn } btnText="Withdraw"/>
                <View style={styles.container5}>
                    <App_text text='Start Lending' textStyle={styles.titletxt}></App_text>
                    <App_text text='Enter Amount to Lend' textStyle={styles.subtitletxt}></App_text>
                    <View style={styles.container11}>
                        <Text style={styles.currencytxt}>Ksh</Text>
                        <TextInput style={styles.inputfield}  onChangeText={settext} value={text}></TextInput>
                    </View>
                    <App_text text='Choose your preferred interest on your loan amount' textStyle={styles.subtitletxt}></App_text>
                    <View style={styles.container12}>
                        <Dropdown
                            options={[
                                { label: '13%', value: '13%' },
                                { label: '16%', value: '16%' },
                                { label: '18%', value: '18%' },
                                { label: '20%', value: '20%' },
                                { label: '24%', value: '24%' },
                                { label: '28%', value: '28%' },
                                { label: '35%', value: '35%' },
                            ]}
                        />
                    </View>
                    <App_text text='Choose settlement period' textStyle={styles.subtitletxt}></App_text>
                    <View style={styles.container12}>
                    <Dropdown
                            options={[
                                { label: '14 Days', value: '14' },
                                { label: '28 Days', value: '28' },
                                { label: '44 Days', value: '44' },
                            ]}
                        />
                    </View>
                    <App_text text='Total amount to receive after maturity' textStyle={styles.subtitletxt}></App_text>
                    <App_currencyframe containerStyle={styles.container11} text1="Ksh" text2="12000" currencytxt={styles.currencytxt} amounttxt={styles.amounttxt}></App_currencyframe>
                    <Button btnStyle={styles.lendbtn } textStyle={styles.txtbtn} btnText="Lend"onPress={() => Alert.alert("Amount Lended Successfully")}/>
                </View>

            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    inputfield: {
        color: '#0075FF',
        fontWeight: 'bold',
        fontSize: 23, 
        // backgroundColor: 'grey',
        width: '50%',
        padding: '2%',
        
        
      },
    container1:{
        flex: 1,
        backgroundColor: 'white'
    },
    container2:{
        flex:0.3,
        backgroundColor: '#05F000',
        transform : [ 
            { scaleX : 1.1 },
            
         ],
        borderBottomStartRadius : 500,
        borderBottomEndRadius : 500,

    },
    container3:{
        flex: 0.7,
        backgroundColor: 'white',
        marginTop: '1%'
    },
    container4: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 8,
    },
    container5: {
        flex: 0.8,
        // backgroundColor: 'violet',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    container10: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container8: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center',
        borderWidth: 7,
        borderColor: '#07EFE1',
        borderRadius: 25,
        padding: 1
    },
    container9: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'center',
        borderWidth: 7,
        borderColor: '#07EFE1',
        borderRadius: 25,
        padding: 1
    },
    container11:{
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'center',
        borderWidth: 7,
        borderColor: '#07EFE1',
        borderRadius: 25,
        paddingHorizontal: 5,
        width: '50%',
        height: '12%',
    },
    container12:{
        marginTop: 5,
        justifyContent: 'center',
        // alignItems: 'center',
        borderWidth: 7,
        borderColor: '#07EFE1',
        borderRadius: 25,
        //paddingHorizontal: 5,
        width: '40%',
        height: '12%',
    },
    txt:{
        color: 'black',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
    },
    currencytxt:{
        color: 'black',
        marginRight: 3,
        marginTop: 8,
        fontSize: 15,
        fontWeight: 500,
        fontFamily: 'Roboto',
    },
    amounttxt:{
        color: '#0075FF',
        fontWeight: 'bold',
        fontSize: 23,
        fontFamily: 'Roboto',
    },
    titletxt:{
        fontWeight: 'bold',
        fontSize: 23,
        color: 'black',
        fontFamily: 'Roboto',
    },
    subtitletxt:{
        color:'black',
        fontSize: 15,
        fontWeight: 500,
        marginTop: 4,
    },
    headingtxt1:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Roboto',
        marginStart: '20%'
    },
    headingtxt2:{
        color: 'white',
        // fontWeight: 'bold',
        fontSize: 11,
        fontFamily: 'Roboto',
        marginStart: '20%'
    },
    withdrawbtn:{
        backgroundColor: '#3467FF',
        width: '35%',
        height: '6%',
        marginLeft: '9%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    lendbtn:{
        backgroundColor: '#3467FF',
        width: '30%',
        height: '8%',
        // marginLeft: '14%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10
    },
    depositbtn:{
        backgroundColor: '#3467FF',
        width: '35%',
        height: '14%',
        alignItems: 'center',
        justifyContent:  'center',
        marginStart: '32%',
        borderRadius: 20,
        marginTop: 18
    },

    txtbtn:{
        color: 'white',
        fontSize: 18,
        fontFamily: 'Roboto',
    },
    img:{
        width: 62,
        height: 86,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    cancelButton: {
        backgroundColor: '#F44336',
        padding: 10,
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
        
      },
    submitButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        backgroundColor: 'grey'
      },
      amountInput: {
        fontSize: 20
      },
      amountButton: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        color: 'black',
        fontSize: 28,
        
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
      },
      image: {
        flex: 1,
        // justifyContent: 'center',
      },
      
})

export default LenderHome;