import { View, Text, StyleSheet } from "react-native";

export default function Exemplo01() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Teste</Text>
      <Text style={styles.subtitulo}>Estrutura padrão</Text>
      <Text style={styles.exemplo}>É só lixar e pintar</Text>
      {/* VAMOS CONSTRUIR AQUI E USAR styles.exemplo */}
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    fontSize: 20,
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#0c9c11",
    borderRadius: 8,
    textAlign: "center"
  },
});