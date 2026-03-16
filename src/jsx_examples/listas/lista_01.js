import { View, Text, StyleSheet } from "react-native";

export default function Lista_01() {
  const linguagem = "JavaScript"
  const ano = 2025

  const preco = 49.9
  const formatarPreco = (preco) => {
    return `R$ ${preco.toFixed(2)}`}
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista 01 - Rafael Ferreira</Text>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Ex01 - View com Text</Text>
        <Text>Olá</Text>
        <Text>Mundo</Text>
      </View>

      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Ex02 - Variáveis no JSX</Text>
        <Text> Linguagem: {linguagem}</Text>
        <Text> Ano: {ano}</Text>
      </View>

      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Ex03 - Função no JSX</Text>
        <Text>{formatarPreco(preco)}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});