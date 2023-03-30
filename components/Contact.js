import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import * as Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/Feather';
import Button from './button';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [relationshipText, setRelationshipText] = useState('');
  const [isAddingRelationship, setIsAddingRelationship] = useState(false);
  const [relationList, setRelationList] = useState([]);

  const openContactList = () => {
      Contacts.getAll()
        .then((contacts) => {
          setContacts(contacts);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  
  const handleAddRelationPress = () => {
    setIsAddingRelationship(false);
    // Add code to save the relationship and selected contacts here
    setRelationList([...relationList,relationshipText])
    setRelationshipText('')
  };
  

  const handleContactPress = (contact) => {
    setIsAddingRelationship(true);
    setSelectedContacts((prevSelectedContacts) => [...prevSelectedContacts, contact]);
    
  };

  const handleContactRemove = (contact) => {
    setSelectedContacts((prevSelectedContacts) =>
      prevSelectedContacts.filter((selectedContact) => selectedContact.recordID !== contact.recordID)
    );
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedContacts.some((selectedContact) => selectedContact.recordID === item.recordID);

    return (
      <TouchableOpacity
        style={[styles.contactItem, isSelected && styles.selectedContactItem]}
        onPress={() => handleContactPress(item)}
      >
        <Text style={styles.contactName}>
          {item.givenName} {item.familyName}
        </Text>
        {isSelected && (
          <TouchableOpacity style={styles.removeContactButton} onPress={() => handleContactRemove(item)}>
            <Icon name="x" size={20} color="white" />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  const filterContacts = (contacts) => {
    if (searchText === '') {
      return contacts;
    } else {
      return contacts.filter(
        (contact) =>
          contact.givenName.toLowerCase().includes(searchText.toLowerCase()) ||
          contact.familyName.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  };

  const filteredContacts = filterContacts(contacts);

  const handleRelationshipTextChange = (text) => {
    setRelationshipText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectedContactsContainer}>
        {selectedContacts.map((selectedContact) => (
          <View style={styles.selectedContact} key={selectedContact.recordID}>
            <Text style={styles.selectedContactName}>
              {selectedContact.givenName} {selectedContact.familyName}
            </Text>
            <TouchableOpacity
              style={styles.removeContactButton}
              onPress={() => handleContactRemove(selectedContact)}
            >
              <Icon name="x" size={20} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.relationshipInputContainer}>
        <TextInput
          placeholder="Add relationship"
          value={relationshipText}
          onChangeText={handleRelationshipTextChange}
          style={styles.relationshipInput}
        />
      </View>
      <Button btnText='Add Relation' onPress={handleAddRelationPress} textStyle={{color:'white',fontSize:18,alignSelf:'center'}} btnStyle={{backgroundColor:'#0095FF',width:'50%',alignSelf:'center',padding:'5%',margin:'3%',borderRadius:10}}/>
      <View style={styles.searchBar}>
        <Icon name="search" size={24} color="black" />
        <TextInput
          placeholder="Search contacts"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          style={styles.searchInput}
        />
      </View>

      <Button btnText='Contact' onPress={openContactList} textStyle={{color:'white',fontSize:18,alignSelf:'center'}} btnStyle={{backgroundColor:'#0095FF',width:'50%',alignSelf:'center',padding:'5%',margin:'3%',borderRadius:10}}/>
      {isAddingRelationship ? (
  <View >
    <Text style={{color:"red",fontSize:18,fontWeight:'bold'}}>Please add a relationship before selecting another contact</Text>
  </View>
  ) : (
    <FlatList
      data={filteredContacts}
      renderItem={renderItem}
      keyExtractor={(item) => item.recordID}
    />
  )}


      
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    padding: '5%',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#0095FF',
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 18,
    flex: 1,
  },
  selectedContactsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: 10,
  },
  selectedContact: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0095FF',
    borderRadius: 20,
    padding: 10,
    margin: 5,
  },
  selectedContactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 10,
  },
  removeContactButton: {
    padding: 5,
    backgroundColor: 'black',
    borderRadius: 20,
    marginLeft:'5%'
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#0095FF',
  },
  selectedContactItem: {
    backgroundColor: '#0095FF',
    borderBottomColor: 'white',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black',
  },
  relationshipInputContainer: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#0095FF',
  },
  relationshipInput: {
    fontSize: 18,
  },
});
