import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Ícone para a página Home

export default function Home({ navigation, usuario }) {
  // Exibindo no console os dados do usuário
  console.log('Usuario', usuario);

  return (
    <View style={styles.boxHome}>
      {/* Balão branco para o título com ícone */}
      <View style={styles.whiteBallTitle}>
        <Icon name="book" size={30} color="orange" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.appTitle}>BookConnect</Text>
          <Text style={styles.titulo}>Bem-vindo!</Text>
        </View>
      </View>

      {/* Balão branco para o conteúdo de boas-vindas */}
      <View style={styles.whiteBallForm}>
        <Text style={styles.welcomeText}>Olá, {usuario ? usuario.nome : 'Usuário'}!</Text>
        <Text style={styles.infoText}>E-mail: {usuario ? usuario.email : 'Indisponível'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxHome: {
    flex: 1,
    backgroundColor: "#ADD8E6", 
    alignItems: "center",
    justifyContent: "center",
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
    width: "50%", 
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
  welcomeText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "600",
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
});
