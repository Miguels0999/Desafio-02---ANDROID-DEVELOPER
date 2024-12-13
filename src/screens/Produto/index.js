import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Produto({ usuario }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Em Breve, Serão Adicionados Livros Para Venda E Aluguel!!!
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6", // Azul claro para o fundo
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "black",
    fontWeight: "700", 
    textAlign: "center", 
  },
});
