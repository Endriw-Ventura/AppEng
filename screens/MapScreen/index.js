import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Map Screen</Text>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: -23.55052, longitude: -46.633308 }}
          title={"Marker Title"}
          description={"Marker Description"}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
