import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const ProfileScreen = ({ route }) => {
  debugger;
  const { accessToken } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.containerBemVindo}>
        <Text style={styles.title}>Bem-vindo, {userName}!</Text>
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.text}>Nome Completo: {userName}</Text>
        <Text style={styles.text}>Informações para contato:</Text>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.text}>Telefone: {phoneNumber}</Text>
        <Text style={styles.text}>
          Endereço: {address.street}, {address.city}, {address.uf}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c4a88",
    flex: 1,
    gap: 80,
    alignItems: "center",
  },
  containerBemVindo: {
    margin: 24,
    justifyContent: "flex-start",
  },
  containerInfo: {
    gap: 12,
    margin: 24,
    justifyContent: "flex-end",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
