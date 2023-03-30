import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import App_select_bidder from "../components/selectbidder";
import Icon from 'react-native-vector-icons/Entypo';

const Choosebidder = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [headerText1, setHeaderText1] = useState("Load Amount");
    const [headerText2, setHeaderText2] = useState("Ksh 20000");
    const [headerText3, setHeaderText3] = useState("status");
    const [headerText4, setHeaderText4] = useState("Repayed");
  
    const handleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    const handleHeaderChange = () => {
      if (isExpanded) {
        setHeaderText1("Load Amount");
        setHeaderText2("Ksh 20000");
        setHeaderText3("Status");
        setHeaderText4("Repayed");
      } else {
        setHeaderText1("Lendslip id:");
        setHeaderText2("213");
        setHeaderText3("");
        setHeaderText4("");
      }
    };


    return(
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
            <View style={styles.content1}>
                <View style={styles.content1frames}>
                    <Text style={styles.headerText1}>Load Amount</Text>
                    <Text style={styles.content1Text2}>Ksh 20000</Text>
                </View>
                <View style={styles.content1frames}>
                    <Text style={styles.headerText1}>Load Interest</Text>
                    <Text style={styles.content1Text2}>20%</Text>
                </View>
                <View style={styles.content1frames}>
                    <Text style={styles.headerText1}>Payment Period</Text>
                    <Text style={styles.content1Text2}>14 Days</Text>
                </View>

            </View>
            <View style={styles.content2}>
                <Text style={styles.headerText1}>Repayment Amount</Text>
                <Text style={styles.content2Text2}>12000</Text>
            </View>
            <View style={styles.content3}>
                <View style={styles.content3frames}>
                    <Text style={styles.content3Text1}>Status</Text>
                    <Text style={styles.content3Text2}>Partially Paid</Text>
                </View>
                <View style={styles.content3frames}>
                    <Text style={styles.content3Text1}>Balance</Text>
                    <Text style={styles.content3Text2}>40000</Text>
                </View>
            </View>

            <App_select_bidder />
            <App_select_bidder />
            <App_select_bidder />
            <App_select_bidder />

          </View>
        )}
      </View>
    </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 10,
    padding: '2%',
    margin: '2%',
    borderColor: "#14FAEC"
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
    color: "black"
  },
  headerText2: {
    fontWeight: 800,
    fontSize: 19,
    color: "#1EA1FF"
  },
  headerText3: {
    fontWeight: 400,
    fontSize: 16,
    color: "black",
    marginHorizontal: '6%'
  },
  content1Text2: {
    fontWeight: 800,
    fontSize: 19,
    color: "black"
  },
  content2Text2: {
    fontWeight: 800,
    fontSize: 20,
    color: "#88D060",
    
  },
  content3Text1: {
    fontWeight: 400,
    fontSize: 16,
    color: "black",
    marginHorizontal: '4%'
  },
  content3Text2: {
    fontWeight: 800,
    fontSize: 19,
    color: "#1EA1FF",
    // marginHorizontal: '4%'
  },
  content: {
    marginTop: '5%'
  },
  headerContent1: {
    flexDirection: "column"
  },
  expandedHeaderContent1: {
    // backgroundColor: 'violet',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerContent2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  content1: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  content2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: '3%'
  },
  content3: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: '1%'
  },
  content1frames: {
    flexDirection: "column",
    borderWidth: 1,
    padding: '1%',
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#14FAEC",
    marginHorizontal: '3%', 
  },
  content3frames: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: "center"
  }
});

export default Choosebidder;