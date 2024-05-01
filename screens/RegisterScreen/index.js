import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL_API } from "../../consts/consts";
import imageBg from "../../assets/images/background/helpet bg.jpeg";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async () => {
    try {
      const response = await fetch(`${BASE_URL_API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        navigation.navigate("Login");
      } else {
        console.error("Authentication failed:", data.message);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={imageBg} style={styles.background} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.text}>{"Registrar"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
  registerText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: "1px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#1c4a88",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    height: "60%",
    width: "100%",
  },
  button: {
    width: "25%",
    height: "25px",
    margin: "12px",
    paddingTop: "2px",
    backgroundColor: "#0FA7AF",
    borderRadius: 8,
  },
  input: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
});

export default RegistrationScreen;
