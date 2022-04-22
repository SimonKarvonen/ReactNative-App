import React, { useState, Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import usersJson from "../data/users.json";

const DataList = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search by User</Text>

      <TextInput
        style={styles.input}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChangeText={(e) => {
          setSearchTerm(e);
        }}
      />
      {usersJson.Users.filter((val) => {
        if (searchTerm == "") {
          {
            /* return val; */
          }
        } else if (
          val.Username.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((user, key) => {
        return (
          <View key={key}>
            <Text style={styles.items}>{user.Username}</Text>
            <Button
              title="Profile"
              onPress={() =>
                navigation.navigate("UserCard", {
                  user: user,
                })
              }
            ></Button>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  header: {
    fontSize: 38,
  },

  input: {
    marginTop: 20,
    width: 300,
    height: 40,
    fontSize: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },

  items: {
    margin: 10,
    fontSize: 18,
  },
});

export default DataList;
