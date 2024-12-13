import React, { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import MeuInput from "../../components/MeuInput";
import SuperButton from "../../components/SuperButton";
import usuarioService from "../../services/usuarioService";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';  // Importando o ícone

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const salvarDados = async (token, usuario) => {
    try {
      await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      console.error("Erro ao salvar os dados do usuario", error);
    }
  };

  const login = async () => {
    // E-mail e senha fixos para testar
    const emailFixo = "teste@teste.com";
    const senhaFixa = "123456";

    if (email === emailFixo && senha === senhaFixa) {
      // Simulando sucesso no login
      const usuario = { nome: "Usuário Teste", email: emailFixo }; 
      const token = "1234567890"; 

      salvarDados(token, usuario);
      navigation.navigate("Tabs", { usuario });
    } else {
      Alert.alert("Erro", "E-mail ou senha inválidos");
    }
  };

  const cadastrar = () => {
   
    alert("Aqui vou fazer o cadastro.");
  };

  return (
    <View style={styles.boxLogin}>
     
      <View style={styles.whiteBallTitle}>
        <Icon name="book" size={30} color="orange" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.appTitle}>BookConnect</Text>
          <Text style={styles.titulo}>Login</Text>
        </View>
      </View>

     
      <View style={styles.whiteBallForm}>
        <MeuInput
          label="E-mail"
          placeholder="exemplo@exemplo.com"
          comMascara={false}
          onValueChange={setEmail}
        />

        <MeuInput
          label="Senha"
          placeholder="****"
          comMascara={true}
          onValueChange={setSenha}
        />

        <View style={styles.boxRecuperarSenha}>
          <Text style={styles.esqueciMinhaSenha}>Esqueci minha senha</Text>
        </View>

        <View style={{ marginBottom: 18, marginTop: 18 }}>
          <SuperButton value="Entrar" onPress={login} primary />
        </View>

        <View>
          <SuperButton value="Cadastrar" onPress={cadastrar} />
        </View>
      </View>

      <Text>{email}</Text>
      <Text>{senha}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boxLogin: {
    flex: 1,
    backgroundColor: "#ADD8E6", 
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 20,
  },
  whiteBallTitle: {
    backgroundColor: "#fff",
    padding: 20, 
    borderRadius: 50, 
    marginBottom: 15, 
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6, 
  },
  icon: {
    marginRight: 10, 
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  whiteBallForm: {
    backgroundColor: "#fff",
    padding: 20, 
    borderRadius: 30, 
    width: "30%", 
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6, 
  },
  appTitle: {
    fontSize: 40, 
    color: "#000",
    fontWeight: "700",
  },
  titulo: {
    fontSize: 35, 
    color: "orange",
    fontWeight: 700,
  },
  boxRecuperarSenha: {
    justifyContent: "flex-start",
  },
  esqueciMinhaSenha: {
    color: "orange",
    fontStyle: "italic",
    fontSize: 12,
  },
});
