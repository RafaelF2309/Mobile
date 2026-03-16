import { View, Text, StyleSheet } from "react-native";

export default function Exemplo02() {
    const nome = "Rafifa";
    const idade = "17";
    const peso = "64";

    const usuario = {
        nome: "Sola",
        cidade: "Salto",
    };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>1. Variáveis</Text> //titulo
      <Text style={styles.subtitulo}>Variáveis comuns</Text> //subtitulo
      <View style={styles.exemplo}>
        <Text>Nome: {nome.toUpperCase()}</Text>
        <Text>Idade: {idade}</Text>
        <Text>Peso: {peso}</Text>
      </View>
      <View style={styles.exemplo}>
        <Text>Nome: {usuario.nome}</Text>
        <Text>Cidade: {usuario.cidade}</Text>
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

