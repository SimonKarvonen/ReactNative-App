import { Checkbox } from 'native-base';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  CheckBox,
  SectionList,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';

const UserCard = ({ navigation, route }) => {
  const { user } = route.params;

  const data = user;

  // Badges

  const [badges, setBadges] = useState(data.Badges);

  const handleChangeBadges = (id) => {
    let temp = badges.map((badge) => {
      if (id === badge.id) {
        return { ...badge, Value: !badge.Value };
      }
      return badge;
    });
    setBadges(temp);
  };

  let selectedBadges = badges.filter((badge) => badge.Value);

  const renderFlatListBadges = (renderDataBadges) => {
    return (
      <FlatList
        data={renderDataBadges}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}
            >
              <Text>{item.Name}</Text>
              <CheckBox
                value={item.Value}
                onChange={() => {
                  handleChangeBadges(item.id);
                }}
              />
            </View>
          </View>
        )}
      />
    );
  };

  //Materials

  const [materials, setMaterials] = useState(data.Materials);

  const handleChangeMaterials = (id) => {
    let temp = materials.map((material) => {
      if (id === material.id) {
        return { ...material, Value: !material.Value };
      }
      return material;
    });
    setMaterials(temp);
  };

  let selectedMaterials = materials.filter((material) => material.Value);

  const renderFlatListMaterials = (renderDataMaterials) => {
    return (
      <FlatList
        data={renderDataMaterials}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}
            >
              <Text>{item.Name}</Text>
              <CheckBox
                value={item.Value}
                onChange={() => {
                  handleChangeMaterials(item.id);
                }}
              />
            </View>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Card for {user.Username}</Text>
      <Text style={styles.ListHeader}>Badges</Text>

      <View style={styles.itemWrapper}>{renderFlatListBadges(badges)}</View>
      <Text style={styles.ListHeader}>Materials</Text>
      <View style={styles.itemWrapper}>
        {renderFlatListMaterials(materials)}
      </View>
      <View style={styles.userCardButtons}>
        <Button title='Save'> </Button>
        {/* <Button title="Go back" onPress={() => navigation.goBack()}></Button> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  card: {
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  header: {
    fontSize: 38,
    alignSelf: 'center',
  },

  itemWrapper: {},

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  userCardButtons: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  ListHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserCard;
