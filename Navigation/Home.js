import React from "react";
import { View } from "react-native";
import Datalist from "../components/dataList";

function Home({ navigation, route }) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
    >
      <Datalist
        navigation={navigation}
        route={route}
        style={{ overflow: "scroll" }}
      />
    </View>
  );
}

export default Home;
