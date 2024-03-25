import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Image } from "react-native";
import imageBg from "../../assets/images/background/helpet bg.jpeg";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aqui você pode adicionar lógica para autenticar o usuário
    // por exemplo, fazer uma requisição para um servidor, etc.
    // Por simplicidade, vamos apenas redirecionar para a tela de perfil.
    navigation.navigate("Profile", { username });
  };

  return (
    <View style={styles.container}>
      <Image source={imageBg} style={styles.background} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nome de Usuário"
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
        <Button title="Login" onPress={handleLogin} />{" "}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
