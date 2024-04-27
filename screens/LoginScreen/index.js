import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { BASE_URL_API } from "../../consts/consts";
import imageBg from "../../assets/images/background/helpet bg.jpeg";
import FlatButton from "../../shared/button";
import CustomTextInput from "../../shared/text";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(`${BASE_URL_API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password,
          twoFactorCode: "",
          twoFactorRecoveryCode: "",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate("Profile", { username: email });
      } else {
        console.error("Authentication failed:", data.message);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const moveRegistration = () => {
    navigation.navigate("Register");
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
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>{"Login"}</Text>
        </TouchableOpacity>

      {/* 
      chamada para botão em componente personalizado. 
      
      <FlatButton
            text='botao2'
            onPress={() => console.log('Botão pressionado')}
            style={{ backgroundColor: 'blue', borderRadius: 10 }}
      /> 

      chamada para botão em componente personalizado.

      <CustomTextInput
          value=""
          onChangeText=""
          placeholder="Digite algo..."
          inputStyle={styles.input}
      />

      */}

        <TouchableOpacity onPress={moveRegistration}>
          <Text style={(styles.text, styles.registerText)}>
            {"Registrar-se"}
          </Text>
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

export default LoginScreen;
