import React, {useState, useEffect}  from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert, Dimensions, ImageBackground} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import App_icon from '../components/logo';
import App_text from '../components/text';
import Button_ico from '../components/button_icon';
import Button from '../components/button';
import Button_loa from '../components/button_loan';
import Button_settle from '../components/button_settlement';
import Popup from '../components/modal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import RotatingCheckIcons from './icons';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const BUTTON_WIDTH = width * 0.3;
const BUTTON_HEIGHT = height * 0.5;

function Home({navigation}){

    const logo = require("../assets/images/kopa.png");
    const image = require("../assets/images/curvedview.jpeg")
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValueLoan, setSelectedValueLoan] = useState('');
    const [selectedValueDay, setSelectedValueDay] = useState('');
    const [showModal, setShowModal] = useState(false);
    const loan = 2000
    const [interest, setInterest] = useState()
    const [credit, setCredit] = useState(3)
    const [showModal240, setShowModal240] = useState(false);
    const [showModalVerify, setShowModalVerify] = useState(false);
    const first_timer = false
    const [lastAmountBorrowed, setLastAmountBorrowed] = useState(0)
    const data_loan = [
        { label: "1000", value: "1000" },
        { label: "2000", value: "2000" },
        { label: "4500", value: "4500" },
        { label: "7500", value: "7500" }
    ];
    const data_day = [
        { label: "7", value: "7" },
        { label: "14", value: "14" },
        { label: "44", value: "44" }
    ];

    const pickerData = first_timer ? data_loan.slice(0, 2) : data_loan;
    const pickerDataDay = first_timer ? data_day.slice(0, 2) : data_day;

    const amountBorrowed = () => {
        if (first_timer === true || credit <= 5){
            setLastAmountBorrowed(1000)
        }
        else if (first_timer === false || (credit >= 6 && credit <= 9)) {
            setLastAmountBorrowed(loan)
        }

    }

    const amountInterest = () =>{
        if (parseInt(selectedValueDay) === 7){
            setInterest(parseInt(selectedValueLoan * 0.21))
        }
        else if (parseInt(selectedValueDay) === 14){
            setInterest(parseInt(selectedValueLoan * 0.28))
        }
        else{
            setInterest(parseInt(selectedValueLoan * 0.45))
        }
    }
    const amountInterest1 = () =>{
        if (parseInt(selectedValueDay) === 7){
            setInterest(parseInt(selectedValueLoan * 0.28))
        }
        else if (parseInt(selectedValueDay) === 14){
            setInterest(parseInt(selectedValueLoan * 0.21))
        }
        
    }

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + parseInt(selectedValueDay))
    const dateString = currentDate.toLocaleDateString();
    const repayment = parseInt(selectedValueLoan) + parseInt(interest) + 100

    const handleButtonClick = () => {
        setShowModal(true);
    }
    
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleButtonClick240 = () => {
        setShowModal240(true);
    }
    
    const handleCloseModal240 = () => {
        setShowModal240(false);
    }
    const handleButtonClickVerify = () => {
        setShowModalVerify(true);
    }
    
    const handleCloseModalVerify = () => {
        setShowModalVerify(false);
    }

    useEffect(() => {
        amountBorrowed()
    }, [])

    const [activeIndex, setActiveIndex] = useState(0);
    const [buttons, setButtons] = useState([1000, 2000, 4500, 7500]);

    const renderButtonLoan = (item, index) => {
        const position = index - activeIndex;
        const scale = position === 0 ? 1 : 0.8;
        const opacity = position === 0 ? 1 : 0.6;
        return (
        <TouchableOpacity
            key={index}
            style={[
            styles.btn_third_view_1,
            {
                transform: [{ scale }],
                opacity,
                width: BUTTON_WIDTH,
            },
            ]}
            onPress={() => {
                if(first_timer === true && index <= 1){
                    setSelectedValueLoan(buttons[index])
                }
                else if (first_timer === false){
                    setSelectedValueLoan(buttons[index])
                }
            }}
        >
            <Text style={styles.btnTextStyle_third}>Amount</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Text style={styles.txt_btn_third_view}>Ksh</Text>
                    <Text style={styles.txt_btn_third_view}>{item}</Text>
            </View>
        </TouchableOpacity>
        );
    };

    const [activeIndexDay, setActiveIndexDay] = useState(0);
    const [buttonsDay, setButtonsDay] = useState([7, 14, 44]);
    const renderButtonDay = (itemDay, indexDay) => {
    const position = indexDay - activeIndexDay;
    const scale = position === 0 ? 1 : 0.8;
    const opacity = position === 0 ? 1 : 0.6;
    return (
      <TouchableOpacity
        key={indexDay}
        style={[
          styles.btn_third_view,
          {
            transform: [{ scale }],
            opacity,
            width: BUTTON_WIDTH,
          },
        ]}
        onPress={() => {
            if(first_timer === true && indexDay <= 1){
                setSelectedValueDay(buttonsDay[indexDay])
            }
            else if (first_timer === false){
                setSelectedValueDay(buttonsDay[indexDay])
            }
        }}
      >
        <Text style={styles.btnTextStyle_second}>Day</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text style={styles.txt_btn_third_view}>{itemDay}</Text>
          </View>
      </TouchableOpacity>
    );
  };

    return(
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.container}>

            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginTop: '10%', marginStart: '7%'}} onPress={() => {navigation.toggleDrawer(), amountInterest(), navigation.navigate('kopa_pay_home', {
                        selectedValue: selectedValue,
                        selectedValueLoan: selectedValueLoan,
                        selectedValueDay: selectedValueDay,
                        repayment: repayment,
                        interest: interest,
                        date: dateString
                    })}}>
                        <FontAwesome5 name="bars" color='white' size={20}/>
                    </TouchableOpacity>
                
                    <App_icon imgStyle={{marginTop: '5%',marginStart: '32%'}} img={logo}/>
                </View>
                <App_text textStyle={styles.txt('white', 0, '20%', 18, 'bold')} text="Thank you for choosing us."/>
                <App_text textStyle={styles.txt('white', 0, '20%', 11, 'light')} text = "Easy loans, Instant loans, Reliable lenders."/>
                <Button_ico btnStyle={styles.btn('40%', 2, 15, '30%')} name='search-plus' size={18} color='white' btnText="View my loan limit" textStyle={styles.btnTextStyle('center')} onPress={() => {handleButtonClick(), amountInterest1()}}/>
            </ImageBackground>
            


        </View>




        <View style={styles.second_view}>
            <Button btnStyle={styles.btn_second_view} btnText="Try Loan Bidding from our esteemed Lenders" textStyle={styles.btnTextStyle_second} onPress={handleButtonClick240}/>
            <App_text textStyle={styles.txt_second_view} text="Your credit score"/>
            <App_text textStyle={styles.txt('red', 9, 0, 16, 'bold')} text={credit + '/10'} />
        </View>
        <View style={styles.third_view}>
            <App_text textStyle={[styles.txt_second_view, {fontWeight: 'bold'}]} text="Choose Loan Amount"/>
            <View style={styles.nested_third_view}>
                <Swiper
                    showsPagination={false}
                    loop={false}
                    index={activeIndex}
                    onIndexChanged={(index) => setActiveIndex(index)}
                    activeDotColor="#FFC107"
                    dotColor="#CCC"
                    style={styles.wrapper}
                    scrollEnabled={true}
                >
                    {buttons.map((button, index) => {
                    return (
                        <View key={index} style={styles.slide}>
                        {renderButtonLoan(button, index)}
                        </View>
                    );
                    })}
                </Swiper>
            </View>
        </View>
        <View style={styles.third_view}>
            <App_text textStyle={[styles.txt_second_view, {fontWeight: 'bold'}]} text="Choose Settlement Period"/>
            <View style={styles.nested_third_view}>

            <Swiper
                    showsPagination={false}
                    loop={false}
                    index={activeIndexDay}
                    onIndexChanged={(index) => setActiveIndexDay(index)}
                    style={styles.wrapper}
                    scrollEnabled={true}
                >
                    {buttonsDay.map((buttonDay, indexDay) => {
                    return (
                        <View key={indexDay} style={styles.slide}>
                        {renderButtonDay(buttonDay, indexDay)}
                        </View>
                    );
                    })}
                </Swiper>

            </View>
        </View>

        <View style={{flexDirection: 'row',  justifyContent: 'space-evenly', alignItems: 'center', marginTop: '5%'}}>
            <App_text textStyle={{color: 'black', marginBottom: '5%', marginTop: '2%'}} text="Select Purpose" />
            <View style={styles.dropDownWrapper('40%', 30, 'black', 2)}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    style={styles.dropDownStyle}
                    mode="dropdown"
                    dropdownIconColor="black"
                >
                    <Picker.Item label="Business" value="Business" />
                    <Picker.Item label="Education" value="Education" />
                    <Picker.Item label="Agriculture" value="Agriculture" />
                    <Picker.Item label="Personel" value="Personel" />
                    <Picker.Item label="Others" value="Others" />
                </Picker>
            </View>
        </View>

        <View style={{alignItems: 'center'}}>
            <Button btnStyle={styles.btn_money} textStyle={{color: '#3467FF'}} btnText="Get Money" disabled={selectedValue === ''} onPress={() => {
                handleButtonClickVerify(), 
                amountInterest(),
                setTimeout(() => {
                    handleCloseModalVerify()
                }, 6000);}}/>
        </View>
        <View style={{justifyContent: 'space-evenly', marginTop: '2%', marginStart: '10%', marginEnd: '2%'}}>
            <View style={{flexDirection: 'row'}}>
                <FontAwesome5 style={{marginTop: '2%'}} name="bell" size={18} color='#4B4747'/>
                <App_text textStyle={{marginStart: '2%', marginBottom:'2%',marginTop:'2%', color: '#4B4747', textAlign: 'justify', fontSize: 13, fontWeight: 'bold'}} text="The interest rate is as low as 3% per month" />
            </View>
            <App_text textStyle={{marginStart: '6%', color: '#4B4747', textAlign: 'justify', fontSize: 13, fontWeight: 'bold'}} text="Note that loan settlement period will influence" />
            <App_text textStyle={{marginStart: '6%', marginBottom:'2%', color: '#4B4747', textAlign: 'justify', fontSize: 13, fontWeight: 'bold'}} text="the interest associated with you loan." />
            <View style={{flexDirection: 'row'}}>
                <FontAwesome5 name="calendar" size={18} color='#4B4747'/>
                <App_text textStyle={{marginStart: '2%', marginBottom:'2%', color: '#4B4747', textAlign: 'justify', fontSize: 13, fontWeight: 'bold'}} text="Loan terms are 120+ days." />
            </View>
            <View style={{flexDirection: 'row'}}>
                <FontAwesome5 style={{marginEnd: '1%'}} name="check" color='#008A7C' size={20} />
                <App_text textStyle={styles.txt1('#3467FF')} text="Mkopo Zaidi instant."/>
                <App_text textStyle={styles.txt1('#F9B125')} text=" Fast" />
                <App_text textStyle={styles.txt1('#3467FF')} text=", Safe," />
                <App_text textStyle={styles.txt1('#FD4949')} text=" Easy" />
                <App_text textStyle={styles.txt1('#3467FF')} text=" and" />
                <App_text textStyle={styles.txt1('#008A7C')} text=" Reliable" />
            </View>
        </View>

        <View style={{alignItems: 'center'}}>
            <Button_ico btnStyle={styles.btn('40%', 2, 15)} btnText="More Loan Options" textStyle={styles.btnTextStyle('center')} onPress={() => {handleButtonClick(), amountInterest(), console.log(selectedValue, selectedValueLoan, selectedValueDay, repayment, interest, dateString)}}/>
        </View>

        <Popup visible={showModal} onRequestClose={handleCloseModal}>
            <App_text textStyle={styles.txt_cong('center', 28, 'Montserrat')} text="Congratulations"/>
            <View style={{flexDirection: 'row'}}>
                <App_text textStyle={{color: 'black'}} text="Your Maximum Loan Amount is "/>
                <App_text textStyle={{color: '#FFA500'}} text={"Ksh " + lastAmountBorrowed}/>
            </View>
            <View style={{flexDirection: 'row',  justifyContent: 'space-between'}}>
                <App_text textStyle={styles.txt('black', '5%', 0, 20, 'bold')} text="Loan Amount "/>
                <View style={styles.dropDownWrapper('55%', 50, '#7797F8', 1)}>
                    
                    <Picker
                        selectedValue={selectedValueLoan}
                        onValueChange={(itemValue) => {setSelectedValueLoan(itemValue)}}
                        style={styles.dropDownStyle}
                        mode="dropdown"
                        dropdownIconColor="black"
                    >
                        {pickerData.map((item) => (
                            <Picker.Item key={item.value} label={"Ksh " + item.label} value={item.value} />
                        ))}
                    </Picker>
                </View>
            </View>

            <View style={{flexDirection: 'row' ,  justifyContent: 'space-between'}}>
                <App_text textStyle={styles.txt('black', '5%', 0, 20, 'bold')} text="Loan Terms"/>
                <View style={styles.dropDownWrapper('55%', 50, '#7797F8', 1)}>
                <Picker
                    selectedValue={selectedValueDay}
                    onValueChange={(itemValue) => { 
                        setSelectedValueDay(itemValue)
                        if(parseInt(itemValue) === 7 || parseInt(itemValue) === 14){
                             amountInterest1()
                        }
                        else{
                            setInterest(parseInt(selectedValueLoan * 0.45))
                        }
                        
                    }}
                    style={styles.dropDownStyle}
                    mode="dropdown"
                    dropdownIconColor="black"
                >
                    {pickerDataDay.map((item) => (
                            <Picker.Item key={item.value} label={item.label + " Days"} value={item.value} />
                        ))}
                </Picker>
            </View>
            </View>
            <View style={{backgroundColor: '#EDEDED', borderRadius: 10, marginTop: '10%', height: '30%', justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', marginStart: '5%'}}>
                    <App_text textStyle={{color: 'black', fontSize: 18, fontWeight: 'bold', marginBottom: '2%'}} text="Interest" />
                    <App_text textStyle={{color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: '1.5%', marginStart: '41.5%', textDecorationLine: 'line-through', marginBottom: '2%'}} text={interest + 200} />
                    <App_text textStyle={{color: '#FFA500', fontSize: 14, fontWeight: 'bold', marginTop: '1.5%', marginStart: '2%', marginBottom: '2%'}} text={"Ksh " + interest} />
                </View>
                <View style={{flexDirection: 'row', marginStart: '5%'}}>
                    <App_text textStyle={{color: 'black', fontSize: 18, fontWeight: 'bold', marginBottom: '2%'}} text="Recieve Amount" />
                    <App_text textStyle={{color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: '1.5%', marginStart: '20%', marginBottom: '2%'}} text={"Ksh " + selectedValueLoan} />
                </View>
                <View style={{flexDirection: 'row', marginStart: '5%'}}>
                    <App_text textStyle={{color: 'black', fontSize: 18, fontWeight: 'bold', marginBottom: '2%'}} text="Repayment" />
                    <App_text textStyle={{color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: '1.5%', marginStart: '33.5%', marginBottom: '2%'}} text={"Ksh " + repayment} />
                </View>
                <View style={{flexDirection: 'row', marginStart: '5%'}}>
                    <App_text textStyle={{color: 'black', fontSize: 18, fontWeight: 'bold', marginBottom: '2%'}} text="Due Date" />
                    <App_text textStyle={{color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: '1.5%', marginStart: '39.5%'}} text={dateString} />
                </View>
            </View>
            <View style={{alignItems: 'center'}}>
                <Button btnStyle={styles.btn('100%', 15, 40)} btnText="APPLY" textStyle={styles.btnTextStyle('center')} onPress={() => {selectedValue !== '' ? navigation.navigate('loan_preprocessing', {
                    credit: credit,
                    selectedValue: selectedValue,
                    selectedValueLoan: selectedValueLoan,
                    selectedValueDay: selectedValueDay,
                    repayment: repayment,
                    interest: interest,
                    date: dateString,
                }) : navigation.navigate('kopa_pay_home'), selectedValue === '' ? Alert.alert("Please Select Purpose") :navigation.navigate('loan_preprocessing', {
                    credit: credit,
                    selectedValue: selectedValue,
                    selectedValueLoan: selectedValueLoan,
                    selectedValueDay: selectedValueDay,
                    repayment: repayment,
                    interest: interest,
                    date: dateString,
                }), handleCloseModal()}}/>
            </View>
        </Popup>
        <Popup visible={showModal240} onRequestClose={handleCloseModal240}>
            <View>
                <App_text textStyle={styles.txt_cong('center', 16)} text="Please First Make a Payment of Ksh 240"/>
                <Button  btnStyle={styles.btn('100%', 15, 40)} btnText="OK" textStyle={styles.btnTextStyle('center')} onPress={handleCloseModal240} />
            </View>
        </Popup>
        <Popup visible={showModalVerify} onRequestClose={handleCloseModalVerify}>
            <View>
                <App_text textStyle={styles.txt_cong('flex-start', 16)} text="Processing ..."/>
                <View style={{flexDirection: 'row'}}>
                    <RotatingCheckIcons param={{
                        credit: credit,
                        selectedValue: selectedValue,
                        selectedValueLoan: selectedValueLoan,
                        selectedValueDay: selectedValueDay,
                        repayment: repayment,
                        interest: interest,
                        date: dateString}}/>
                <View>
                    <App_text textStyle={styles.txt_cong('flex-start', 16)} text="1. Check Personal Information"/>
                    <App_text textStyle={styles.txt_cong('flex-start', 16)} text="2. Confirm Credit Score" />
                    <App_text textStyle={styles.txt_cong('flex-start', 16)} text="3. Intelligent Decision"/>
                    <App_text textStyle={styles.txt_cong('flex-start', 16)} text="4. Review Completed"/>
                </View>
                </View>
            </View>
        </Popup>
      </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropDownStyle: {
        backgroundColor: 'white',
        color: 'black',
        height: 30
      },
    dropDownWrapper: (width, height, borderColor, borderWidth) => ({
        backgroundColor:"white",
        width: width,
        borderRadius: 12,
        height: height,
        overflow:'hidden',
        marginBottom:10,
        margin:'2%',
        alignSelf:'flex-start',
        justifyContent:'center',
        borderColor: borderColor,
        borderWidth: borderWidth
        
        
      }),
      check: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
      },
    txt_cong: (alignSelf, fontSize, fontFamily) => ({
        color: 'black',
        fontWeight: 'bold',
        fontSize: fontSize,
        alignSelf: alignSelf,
        fontFamily: fontFamily
    }),
    txt: (color, marginTop, marginStart, fontSize, fontWeight) => ({
        fontWeight: fontWeight,
        fontSize: fontSize,
        color: color,
        marginTop: marginTop,
        marginStart:  marginStart
    }),
    txt1: (color) => ({
        color: color, 
        fontSize: 13, 
        fontWeight: 'bold'
    }),
    btn: (width, padding, borderRadius, marginStart) => ({
        marginTop: '10%',
        backgroundColor: '#3467FF',
        borderRadius: borderRadius,
        width: width,
        padding: padding,
        marginStart: marginStart

    }),
    btnTextStyle: (alignSelf) => ({
        color: 'white',
        alignSelf: alignSelf
    }),
    container: {
        height: '28%',
        width: '100%',
        backgroundColor: '#05F000',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
    },
    second_view:{
        flexDirection:  'row',
        justifyContent: 'space-evenly',
        marginTop: '10%',
    },
    btn_second_view:{
        backgroundColor: '#FFF8E9',
        width: '45%',
        borderColor: '#F9B125',
        borderWidth: 5,
        borderRadius: 40,
    },
    btnTextStyle_second: {
        color: '#3467FF',
        alignSelf: 'center',
        fontSize: 11,
        fontWeight: 'bold',

    },
    txt_second_view: {
        
        color: 'black',
        alignSelf: 'center',
    },
    third_view:{
        
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        height: '10%'
    },
    nested_third_view: {
        flexDirection:  'row',
        justifyContent: 'space-evenly',
        marginTop: '5%',
        height: '70%'
    },

    btn_third_view:{
        backgroundColor: '#FFF8E9',
        borderColor: '#F9B125',
        borderWidth: 5,
        borderRadius: 40
    },
    txt_btn_third_view:{
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    btn_third_view_1:{
        backgroundColor: '#ECFFFE',
        borderColor: '#07EFE1',
        borderWidth: 5,
        borderRadius: 40
    },
    btnTextStyle_third: {
        color: '#008A7C',
        alignSelf: 'center',
    },
    btn_money:{
        backgroundColor: '#E4EAFF',
        width: '40%',
        alignItems:  'center',
        borderWidth: 4,
        borderRadius: 20,
        borderColor: '#3467FF',
        padding: 5
    },
    image: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
    },

})

export default Home