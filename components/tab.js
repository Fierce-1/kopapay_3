import React, {useState} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Loan_repay from '../screens/repayment';
import Loan_s from '../screens/loan_status';


function MyTabs({route}) {
    const Tab = createMaterialTopTabNavigator();
    const { selectedValue, selectedValueLoan, selectedValueDay, repayment, interest, date} = route.params

    return (
        <Tab.Navigator screenOptions={{
            activeTintColor: '#3366FF',
            labelStyle: {
                fontSize: 16,
                fontWeight: 'bold',
        },}}>
        <Tab.Screen name="Loan Record" component={Loan_s} initialParams={{
          selectedValue: selectedValue,
          selectedValueLoan: selectedValueLoan,
          selectedValueDay: selectedValueDay,
          repayment: repayment,
          interest: interest,
          date: date,
        }}/>
        <Tab.Screen name="Repayment" component={Loan_repay} initialParams={{
          selectedValue: selectedValue,
          selectedValueLoan: selectedValueLoan,
          selectedValueDay: selectedValueDay,
          repayment: repayment,
          interest: interest,
          date: date,
        }}/>
        </Tab.Navigator>
    );
}

export default MyTabs