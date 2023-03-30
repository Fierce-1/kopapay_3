import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import App_text from "../components/text";

const Loan_repay = ({route, navigation}) => {
    const {selectedValue, selectedValueLoan,selectedValueDay, repayment, interest, date} = route.params;
    const [isExpanded, setIsExpanded] = useState(false);
    const [headerText1, setHeaderText1] = useState("Repayment");
    const [headerText2, setHeaderText2] = useState("Ksh " + repayment);
    const [headerText3, setHeaderText3] = useState("status");
    const [headerText4, setHeaderText4] = useState("Repayed");
  
    const handleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    const handleHeaderChange = () => {
      if (isExpanded) {
        setHeaderText1("Repayment");
        setHeaderText2("Ksh" + repayment);
        setHeaderText3("Status");
        setHeaderText4("Active");
      }else {
        setHeaderText1("");
        setHeaderText2("");
        setHeaderText3("");
        setHeaderText4("");
      }
    };
    if (!selectedValue || !selectedValueLoan || !selectedValueDay || !repayment || !interest || !date){
        return(
            <View style={{backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'black'}}>No Repayment Records Available</Text>
            </View>
        )
    }
  
    return (
      <TouchableOpacity
        onPress={() => {
          handleHeaderChange();
          handleExpand();
        }}
      >
        <View style={[styles.container, isExpanded && styles.expandedContainer]}>
          <View style={styles.header}>
            <Icon name={isExpanded ? "chevron-up" : "chevron-down"} size={20} color="black" />
            <View style={[styles.headerContent1, isExpanded ? styles.expandedHeaderContent1 : styles.headerContent1]}>
              <Text style={styles.headerText1}>{headerText1}</Text>
              <Text style={styles.headerText2}>{headerText2}</Text>
            </View>
            <View style={styles.headerContent2}>
              <Text style={styles.headerText3}>{headerText3}</Text>
              <Text style={styles.headerText2}>{headerText4}</Text>
            </View>
          </View>
        {isExpanded && (
          <View style={styles.content}>
            <View style={{alignItems: "center", marginBottom: '5%'}}>
            <View style={styles.addbtnframe}>
                <View style={styles.addButton}>
                    <Text style={styles.addButtonText}>Active</Text>
                </View>
            </View>
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
                    <App_text textStyle={styles.txt('black', 'bold', 15, 0, 10, 30)} text="INTEREST"/>
                    <App_text textStyle={styles.txt('black', 'light', 15, 0, 10, '35.2%')} text={"Ksh " + interest}/>
                </View>
                <View style={{flexDirection: "row"}}>
                    <App_text textStyle={styles.txt('black', 'bold', 15, 0, 10, 30)} text="RECIEVE AMOUNT"/>
                    <App_text textStyle={styles.txt('black', 'light', 15, 0, 10, '14.8%')} text={"Ksh " + selectedValueLoan}/>
                </View>
                <View style={{flexDirection: "row"}}>
                    <App_text textStyle={styles.txt('black', 'bold', 15, 0, 10, 30)} text="LOAN REPAYMENT"/>
                    <App_text textStyle={styles.txt('black', 'light', 15, 0, 10, '14.5%')} text={"Ksh " + repayment}/>
                </View>
                <View style={{flexDirection: "row"}}>
                    <App_text textStyle={styles.txt('black', 'bold', 15, 0, 10, 30)} text="DUE DATE"/>
                    <App_text textStyle={styles.txt('black', 'light', 15, 0, 10, '36%')} text={date}/>
                </View>
                <View style={{flexDirection: "row"}}>
                    <App_text textStyle={styles.txt('black', 'bold', 15, 10, 10, 30)} text="LOAN PURPOSE"/>
                    <App_text textStyle={styles.txt('black', 'light', 15, 0, 10, '22%')} text={selectedValue}/>
                </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={{marginBottom: '2%', marginTop: '2%', borderWidth: 1, borderColor: '#4497E4', borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#75C947', padding: '5%', width: '50%'}}>
                <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Disbursed</Text>
              </ TouchableOpacity >
              <TouchableOpacity style={{borderWidth: 1, borderColor: '#4497E4', borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FD4949', padding: '5%', width: '50%'}}>
                <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>Repay Loan</Text>
              </ TouchableOpacity >
            </View>
            
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

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
    addbtnframe: {
        backgroundColor: "#75C947",
        alignItems: "center",
    
        width: "35%",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15
      },
    
      addButtonText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white"
      },
      addButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        alignItems: "center"
      },
  container: {
    
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 8,
    borderColor: '#0095FF'
  },
  expandedContainer: {
    height: "auto"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText1: {
    fontWeight: 400,
    fontSize: 16,
    color: 'black',
    
  },
  headerText2: {
    fontWeight: 800,
    fontSize: 19,
    color: '#1EA1FF'
  },
  headerText3:{
    fontWeight: 400,
    fontSize: 16,
    color: 'black',
    marginHorizontal: 5,
  },
 
  headerContent1:{
    flexDirection: 'column',
  },
  expandedHeaderContent1:{
    // backgroundColor: 'violet',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContent2:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loan_repay;
