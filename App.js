import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from './screens/logo_screen';
import Term from './screens/terms_screen';
import Privacy from './screens/privacy_policy';
import Drawer_navigator from './components/drawer';
import Loan_c from './screens/loan_confirm';
import Livechat from './screens/live_chat';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Reset from './screens/resetPage';
import MyTabs from './components/tab';
import BecomeLender from './screens/becomeLender';
import ContactUs from './screens/contactUs';
import Record from './screens/recordPage';
import Notification from './screens/notification';
import Lenderlist from './screens/lending_list_screen';
import SavingAcc from './screens/saving_account_screen';
import Choosebidder from './screens/choose_bidder_screen';
import Drawer_navigator_Lender from './components/drawerLender';
import Favourite_bidder from './screens/favourite_bidder_screen';
import Ad from './screens/ads';
import Bidloan from './screens/bidLoan_screen';
import PersonalDetails from './screens/personalDetails';
import Profilepage from './screens/profile';

const App = () => {

  const Stack = createNativeStackNavigator()

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Logo" component={Logo} options={{headerShown: false}}/>
        <Stack.Screen name="term_condition" component={Term} options={{headerShown: false}}/>
        <Stack.Screen name="privacy_policy" component={Privacy} options={{headerShown: false}}/>
        <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name="reset" component={Reset} options={{headerShown:false}} />
        <Stack.Screen name="Become a Lender" component={BecomeLender} options={{headerTitleAlign: 'center'}} />
        <Stack.Screen name="Contact us" component={ContactUs} options={{headerTitleAlign: 'center'}} />
        <Stack.Screen name="Transaction Records" component={Record} options={{headerTitleAlign: 'center'}} />
        <Stack.Screen name="Notifications" component={Notification} options={{headerTitleAlign: 'center'}} />
        <Stack.Screen name="profile" component={Profilepage} options={{
          title: 'My Profile', 
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#F4FFFE'}
        }}/>
        <Stack.Screen name="kopa_pay_home" component={Drawer_navigator} initialParams={({route}) => ({
          selectedValue: route.params.selectedValue,
          selectedValueLoan: route.params.selectedValueLoan,
          selectedValueDay: route.params.selectedValueDay,
          repayment: route.params.repayment,
          interest: route.params.interest,
          date: route.params.date,
          })} options={{headerShown: false}}/>
        <Stack.Screen name="loan_preprocessing" component={Loan_c} options={
          {title: 'Loan Preprocesing', 
          headerTitleAlign: 'center'
        }}></Stack.Screen>
        <Stack.Screen name="chat" component={Livechat} options={
          {title: 'Live Chat', 
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="loan_status" component={MyTabs} initialParams={({route}) => ({
          selectedValue: route.params.selectedValue,
          selectedValueLoan: route.params.selectedValueLoan,
          selectedValueDay: route.params.selectedValueDay,
          repayment: route.params.repayment,
          interest: route.params.interest,
          date: route.params.date,
        })} options={{
            title: 'Loan Status', 
            headerTitleAlign: 'center',
        
        }} />
        
        <Stack.Screen name="lender" component={Drawer_navigator_Lender} initialParams={{
          selectedValue: "",
          selectedValueLoan: "",
          selectedValueDay: "",
          repayment: "",
          interest: "",
          date: "",
        }} options={{headerShown: false}}/>
        <Stack.Screen name="lendingList" component={Lenderlist} options={{
            title: 'Your Lending List', 
            headerTitleAlign: 'center',}}/>
        <Stack.Screen name="saving" component={SavingAcc} options={{
          title: 'Savings Account', 
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="bidder" component={Choosebidder} options={{
          title: 'Choose Bidders', 
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="fav" component={Favourite_bidder} options={{
          title: 'Favourite Bidders', 
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="bid_loan" component={Bidloan} options={{
          title: 'Current Bids', 
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="person" component={PersonalDetails} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="ads" component={Ad} options={{
          title: 'Ads', 
          headerTitleAlign: 'center',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
