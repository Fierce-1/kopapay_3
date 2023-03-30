import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, FlatList } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon_dropdown from "react-native-vector-icons/Entypo";

const SavingAcc = () => {

  const [savinglist, setsavinglist] = useState([]);

  const [savedAmount, setsavedAmount] = useState();
  const [monthlyInterest, setmonthlyInterest] = useState();
  const [maturityDate, setmaturityDate] = useState("23/3/2023");
  const [maturityAmount, setmaturityAmount] = useState();
  const [maturityPeriod, setmaturityPeriod] = useState();

  const accountBalance = 10000;

  const [amountToSave, setAmountToSave] = useState(5000);
  const [savingPeriod, setSavingPeriod] = useState(3);

  const handleAmountIncrease = () => {
    setAmountToSave(amountToSave + 5);
  };

  const handleAmountDecrease = () => {
    setAmountToSave(amountToSave - 5);
  };

  const handlePeriodIncrease = () => {
    setSavingPeriod(savingPeriod + 1);
  };

  const handlePeriodDecrease = () => {
    setSavingPeriod(savingPeriod - 1);
  };

  const handleSaveButton = () => {
    setsavedAmount(amountToSave);
    setmaturityPeriod(savingPeriod);
    setmonthlyInterest(savingPeriod * 8);
    setmaturityAmount(amountToSave + (amountToSave * monthlyInterest) / 100);

    setsavinglist((prevsavinglist) => {
      return[
        {amount: savedAmount, interest: monthlyInterest, date: maturityDate, matAmount: maturityAmount, matPeriod: maturityPeriod, key: Math.random().toString()},
        ...prevsavinglist
      ]

    })

    if (amountToSave <= accountBalance) {
      // save the amount
      Alert.alert("Savings", "Your savings have been completed successfully");
    } else {
      Alert.alert(
        "Insufficient Balance",
        "Please make a deposit to complete your savings"
      );
    }
  };

  // const handleReferralButton = () => {
  //   Alert.alert('Referral Program', 'Earn Ksh 200 for every referral you make on the savings platform using your phone number as your referral code');
  // };

  const [isExpanded, setIsExpanded] = useState(false);
  const [headerText1, setHeaderText1] = useState("Saved Amount");
  const [headerText2, setHeaderText2] = useState("Ksh 20000");
  const [headerText3, setHeaderText3] = useState("status");
  const [headerText4, setHeaderText4] = useState("Completed");



  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleHeaderChange = () => {
    if (isExpanded) {
      setHeaderText1("Saved Amount");
      setHeaderText2("Ksh 20000");
      setHeaderText3("Status");
      setHeaderText4("Repayed");
    } else {
      setHeaderText1("Saveslip id:");
      setHeaderText2("213");
      setHeaderText3("");
      setHeaderText4("");
    }
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.subcontainer1}>
        <View style={styles.contentbtn}>
          <View style={styles.item}>
            <View style={styles.itembtn}>
              <TouchableOpacity
                style={styles.itemButton}
                onPress={handleAmountDecrease}
              >
                <Text style={styles.itemButtonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.itemButton}
                onPress={handleAmountIncrease}
              >
                <Text style={styles.itemButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.textframe}>
              <Text style={styles.itemText1}>Amount to save</Text>
              <Text style={styles.itemText2}>{`Ksh ${amountToSave}`}</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.itembtn}>
              <TouchableOpacity
                style={styles.itemButton}
                onPress={handlePeriodDecrease}
              >
                <Text style={styles.itemButtonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.itemButton}
                onPress={handlePeriodIncrease}
              >
                <Text style={styles.itemButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.textframe}>
              <Text style={styles.itemText1}>Saving period</Text>
              <Text style={styles.itemText2}>{`${savingPeriod} months`}</Text>
            </View>
          </View>
        </View>

        <View style={styles.addbtnframe}>
          <TouchableOpacity style={styles.addButton} onPress={handleSaveButton}>
            <Icon
              name={"pluscircleo"}
              size={23}
              color="#75C947"
              style={{ backgroundColor: "white", borderRadius: 100 }}
            />
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity style={styles.referralButton} onPress={handleReferralButton}>
                    <Text style={styles.referralButtonText}>Referral Program</Text>
                </TouchableOpacity> */}
      </View>

      <View style={styles.subcontainer2}>
        <FlatList 
          data={savinglist}
          renderItem={({item}) => (

            <TouchableOpacity
          onPress={() => {
            handleHeaderChange();
            handleExpand();
          }}
        >
          <View
            style={[styles.container, isExpanded && styles.expandedContainer]}
          >
            <View style={styles.header}>
              <Icon_dropdown
                name={isExpanded ? "chevron-up" : "chevron-down"}
                size={20}
                color="black"
              />
              <View
                style={[
                  styles.headerContent1,
                  isExpanded
                    ? styles.expandedHeaderContent1
                    : styles.headerContent1
                ]}
              >
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
                    <Text style={styles.headerText1}>Saved Amount</Text>
                    <Text
                      style={styles.content1Text2}
                    >Ksh {item.amount}</Text>
                  </View>
                  <View style={styles.content1frames}>
                    <Text style={styles.headerText1}>Monthly Interest</Text>
                    <Text
                      style={styles.content1Text2}
                    >{item.interest}%</Text>
                  </View>
                  <View style={styles.content1frames}>
                    <Text style={styles.headerText1}>Maturity Date</Text>
                    <Text style={styles.content1Text2}>{item.date}</Text>
                  </View>
                </View>
                <View style={styles.content2}>
                  <View style={styles.content2items}>
                    <Text style={styles.headerText1}>Maturity Amount</Text>
                    <Text style={styles.content2Text2}>{item.matAmount}</Text>
                  </View>
                  <View style={styles.content2items}>
                    <Text style={styles.headerText1}>Maturity Period</Text>
                    <Text style={styles.content2Text2}>{item.matPeriod}</Text>
                  </View>
                </View>
                <View style={styles.content3}>
                  <View style={styles.content3frames}>
                    <Text style={styles.content3Text1}>Status</Text>
                    <Text style={styles.content3Text2}>Partially Paid</Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </TouchableOpacity>


          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "white"
  },
  subcontainer1: {
    flex: 0.25,
    // backgroundColor: 'violet',
    justifyContent: "center",
    alignItems: "center"
  },
  subcontainer2: {
    flex: 0.75
    // backgroundColor: 'grey',
  },

  contentbtn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
    // backgroundColor: 'green',
    width: "40%",
    padding: 5
  },
  itembtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: 'grey',
    width: "70%"
  },
  itemText1: {
    fontSize: 14,
    marginRight: 10,
    color: "black"
  },

  itemText2: {
    fontSize: 20,
    marginRight: 10,
    fontWeight: "bold",
    color: "black"
  },

  textframe: {
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    marginTop: 15,
    borderRadius: 13,
    padding: 2,
    backgroundColor: "white",
    borderColor: "#FFCE31",
    width: "100%",
    elevation: 5
  },
  itemButton: {
    backgroundColor: "white",
    // borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#FFCE31",
    elevation: 2
  },
  itemButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
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

  // list display styling
  container: {
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    margin: 8,
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
    marginHorizontal: 5
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
    marginHorizontal: 3
  },
  content3Text1: {
    fontWeight: 400,
    fontSize: 16,
    color: "black",
    marginHorizontal: 3
  },
  content3Text2: {
    fontWeight: 800,
    fontSize: 19,
    color: "#1EA1FF",
    marginHorizontal: 3
  },
  content: {
    marginTop: 16
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10
  },
  content2items: {
    justifyContent: "center",
    alignItems: "center"
  },
  content3: {
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 5
  },
  content1frames: {
    flexDirection: "column",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#14FAEC"
  },
  content3frames: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: "center"
  }
});

export default SavingAcc;
