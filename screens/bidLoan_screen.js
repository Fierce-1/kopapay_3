import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Button from "../components/button";

const Bidloan = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const [bidloanlist, setbids] = useState([
    {
      loanAmount: 2000,
      interest: 20,
      repaymentPeriod: 15,
      repaymentAmount: 2200,
      key: 1
    },
    {
      loanAmount: 3000,
      interest: 10,
      repaymentPeriod: 14,
      repaymentAmount: 5200,
      key: 2
    },
    
  ]);

  const handleExpand = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const getHeaderText1 = (index) => {
    if (index === expandedIndex) {
      return "Top Rated Lender: ";
    } else {
      return "Load Amount";
    }
  };

  const getHeaderText2 = (index) => {
    if (index === expandedIndex) {
      return "213";
    } else {
      return "Ksh 20000";
    }
  };

  const getHeaderText3 = (index) => {
    if (index === expandedIndex) {
      return "";
    } else {
      return "Status";
    }
  };

  const getHeaderText4 = (index) => {
    if (index === expandedIndex) {
      return "";
    } else {
      return "Repayed";
    }
  };

  return (
    <View>
      <FlatList
        data={bidloanlist}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              handleExpand(index);
            }}
          >
            <View
              style={[
                styles.container,
                index === expandedIndex && styles.expandedContainer
              ]}
            >
              <View style={styles.header}>
                <Icon
                  name={index === expandedIndex ? "chevron-up" : "chevron-down"}
                  size={20}
                  color="black"
                />
                <View
                  style={[
                    styles.headerContent1,
                    index === expandedIndex
                      ? styles.expandedHeaderContent1
                      : styles.headerContent1
                  ]}
                >
                  <Text style={{fontWeight: 400,
                                fontSize: 16,
                                color: "#3467FF"}}>
                    {getHeaderText1(index)}
                  </Text>
                  <Text style={styles.headerText2}>
                    {getHeaderText2(index)}
                  </Text>
                </View>
                <View style={styles.headerContent2}>
                  <Text style={styles.headerText3}>
                    {getHeaderText3(index)}
                  </Text>
                  <Text style={styles.headerText2}>
                    {getHeaderText4(index)}
                  </Text>
                </View>
              </View>
              {index === expandedIndex && (
                <View style={styles.content}>
                  <View style={styles.content1}>
                    <View style={styles.content1frames}>
                      <Text style={styles.headerText1}>Load Amount</Text>
                      <Text style={styles.content1Text2}>
                        Ksh {item.loanAmount}
                      </Text>
                    </View>
                    <View style={styles.content1frames}>
                      <Text style={styles.headerText1}>Load Interest</Text>
                      <Text style={styles.content1Text2}>{item.interest}%</Text>
                    </View>
                    <View style={styles.content1frames}>
                      <Text style={styles.headerText1}>Repayment Period</Text>
                      <Text style={styles.content1Text2}>
                        {item.repaymentPeriod} Days
                      </Text>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <Text style={styles.headerText1}>Repayment Amount</Text>
                    <Text style={styles.content2Text2}>
                      {item.repaymentAmount}
                    </Text>
                  </View>
                  <View style={styles.content3}>
                    <View style={styles.content3frame1}>
                      <Text style={styles.content3Text1}>Status</Text>
                      <Text style={styles.content3Text2}>Online</Text>
                    </View>
                    <View style={styles.content3frame2}>
                      <Button btnStyle={styles.bidButton} textStyle={styles.bidButtonText} btnText="Bid Loan" />
                    </View>
                  </View>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 10,
    padding: '3%',
    margin: '3%',
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
    fontSize: 14,
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
    justifyContent: "space-between",
    margin: '1%',
    // backgroundColor: 'grey'
  },
  content1frames: {
    flexDirection: "column",
    borderWidth: 1,
    padding: '1.5%',
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#14FAEC",
    marginHorizontal: '3%',
  },
  content3frame1: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: "center",
    width: '60%',
    // backgroundColor: 'green'
  },
  content3frame2: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: "center",
    justifyContent: 'flex-end',
    width: '40%',
    // backgroundColor: 'blue'
  },
  bidButton:{
    backgroundColor: '#14FA47',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    // height: "auto",
    padding: '5%',
    
    // marginLeft: '15%'
  },
  bidButtonText:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
  }
});

export default Bidloan;