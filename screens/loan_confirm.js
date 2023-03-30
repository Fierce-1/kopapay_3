import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, FlatList, Dimensions}  from 'react-native'
import { SlideInDown } from "react-native-reanimated"
import Button from "../components/button"
import App_text from "../components/text"

const Loan_c = ({route, navigation}) => {
    const {credit, selectedValue, selectedValueLoan, selectedValueDay, repayment, interest, date} = route.params

    //const DATA = Array.from({ length: 100 }, () => Math.floor(Math.random() * 10000000000)); // generate an array of 100 random mobile numbers
    
    const DATA = [];

    for (let i = 0; i < 100; i++) {
        const randomNumber = Math.floor(Math.random() * 10000000000);
        const randomValue = Math.floor(Math.random() * 6501) + 1000;


        DATA.push({ mobileNo: randomNumber, loanamount: randomValue, key: i });
    }


    

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % DATA.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);
    
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <App_text textStyle={styles.txt('black', 'bold', 15, 0, '2%')} text={item.mobileNo}/>
            <App_text textStyle={styles.txt('black', 'bold', 15, 0, '2%')} text="Has Recieved" />
            <App_text textStyle={styles.txt('#14FA47', 'bold', 15, 0, '2%')} text={"Ksh "+item.loanamount} />
        </View>
    );

    return(
        <View>
            <View style={{marginStart: '7%'}}>
                <App_text textStyle={styles.txt('#49CD00', 'bold', 16, '3%')} text="Congratulations,"/>
                <View style={styles.view_credit('row')}>
                    <App_text textStyle={styles.txt('#2A324C', 'bold', 14, '3%')} text="Your Credit Score is "/>
                    <App_text textStyle={styles.txt('#1EA1FF', 'bold', 16)} text={credit + '/10'}/> 
                </View>
                <App_text textStyle={styles.txt('black', 'bold', 16)} text="Please Confirm Your Loan Information"/>
            </View>
            <View style= {[styles.view(0, 1, 15, 'center', '25%', '#C9E2FF', '7%'), {marginBottom: '3%', marginTop: '3%'}]}>
                <App_text textStyle={styles.txt('black', 'light', 11)} text="Loan Type"/>
                <App_text textStyle={styles.txt('black', 'bold', 15)} text="Custom"/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={styles.view( 0, 0, 15, 'center', '40%', '#0095FF', 0, 8, 1, 1, 1)}>
                    <App_text textStyle={styles.txt('black', 'bold', 15, '5%')} text="Loan Amount"/>
                    <App_text textStyle={styles.txt('#0095FF', 'bold', 24, '5%')} text={"Ksh " + selectedValueLoan}/>
                </View>
                <View style={styles.view(0, 0, 15, 'center', '40%', '#0095FF', 0, 8, 1, 1, 1)}>
                    <App_text textStyle={styles.txt('black', 'bold', 15, '5%')} text="Loan Period"/>
                    <App_text textStyle={styles.txt('#0095FF', 'bold', 24, '5%')} text={selectedValueDay + " Days"}/>
                </View>
            </View>
            <View style={styles.view('1%', 0, 15, 'flex-start', '85%', '#0095FF', '8%', 8, 1, 1, 1)}>
                <View style={{flexDirection: "row"}}>
                    <App_text textStyle={styles.txt('black', 'bold', 12, 0, 10, 30)} text="INTEREST"/>
                    <App_text textStyle={styles.txt('black', 'light', 12, 0, 10, '34%')} text={"Ksh " + interest}/>
                </View>
                <View style={{flexDirection: "row"}}>
                    <App_text textStyle={styles.txt('black', 'bold', 12, 0, 10, 30)} text="RECIEVE AMOUNT"/>
                    <App_text textStyle={styles.txt('black', 'light', 12, 0, 10, '19.7%')} text={"Ksh " + selectedValueLoan}/>
                </View>
                <View style={{flexDirection: "row"}}>
                    <App_text textStyle={styles.txt('black', 'bold', 12, 0, 10, 30)} text="LOAN REPAYMENT"/>
                    <App_text textStyle={styles.txt('black', 'light', 12, 0, 10, '19.2%')} text={"Ksh " + repayment}/>
                </View>
                <View style={{flexDirection: "row"}}>
                    <App_text textStyle={styles.txt('black', 'bold', 12, 0, 10, 30)} text="DUE DATE"/>
                    <App_text textStyle={styles.txt('black', 'light', 12, 0, 10, '34.7%')} text={date}/>
                </View>
                <View style={{flexDirection: "row"}}>
                    <App_text textStyle={styles.txt('black', 'bold', 12, 10, 10, 30)} text="LOAN PURPOSE"/>
                    <App_text textStyle={styles.txt('black', 'light', 12, 0, 10, '25%')} text={selectedValue}/>
                </View>
            </View>
            <View>
                <App_text textStyle={styles.txt('#909090', 'light', 14, 0, '5%', '5%', '2%')} text="249,459 people successfuly got a maximum loan of Ksh 10,000" />
            </View>
            
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    
                    initialScrollIndex={currentIndex}
                    scrollEnabled={false}
                />
            
            </View>
            <View>
                <App_text textStyle={styles.txt('#909090', 'light', 14, '2%', 0, '5%', '5%', 'justify')} text="you are required to pay a ONE TIME processing and personal details review fee to facilitate your loan request. the facilitation fee will be deducted from your repayment amount once loan is approved." />
            </View>
            <View>
                <Button btnStyle={styles.btn} textStyle={styles.txt('white', 'bold', 16)} btnText="Pay Ksh 240 and get loan immediately" onPress={() => navigation.navigate('loan_status', {
                    selectedValue: selectedValue,
                    selectedValueLoan: selectedValueLoan,
                    selectedValueDay: selectedValueDay,
                    repayment: repayment,
                    interest: interest,
                    date: date
                })}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: (color, fontWeight, fontSize, marginBottom, marginTop, marginStart, marginEnd, textAlign) =>({
        color: color,
        fontWeight:  fontWeight,
        fontSize: fontSize,
        marginBottom: marginBottom,
        marginTop: marginTop, 
        marginStart: marginStart,
        marginEnd: marginEnd,
        textAlign: textAlign
    }),
    view_credit: (flexDirection) => ({
        flexDirection: flexDirection
    }),
    view: (margin, borderWidth, borderRadius, alignItems, width, borderColor, marginStart, borderTopWidth, borderBottomWidth, borderStartWidth, borderEndWidth) => ({
        margin: margin,
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        alignItems: alignItems,
        width: width,
        borderColor: borderColor,
        marginStart: marginStart,
        borderTopWidth: borderTopWidth,
        borderBottomWidth: borderBottomWidth,
        borderStartWidth: borderStartWidth,
        borderEndWidth: borderEndWidth, 

    }),
    btn:{
        backgroundColor: '#3366FF',
        borderRadius: 10,
        padding: 15,
        width: '90%',
        alignItems:  'center',
        marginStart: '5%'
    },
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        height: '24%'
      },
      item: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#0075FF',
        borderRadius: 15,
        padding: 10,
        marginBottom: '2%',
        justifyContent:  'space-evenly'
      },
      columnWrapper: {
        justifyContent: 'space-between',
      }
})

export default Loan_c