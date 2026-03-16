import { View, Text, StyleSheet } from "react-native";

export default function Lista_03() {
    const frutas = ["Maça", "Banana", "Laranja", "Uva"]

    const produtos = [
      {id: 1, nome: "Camisetas", preco: 49.9},
      {id: 2, nome: "Calça", preco: 89.9},
      {id: 3, nome: "Tênis", preco: 199.99}
    ]

    const numeros = [1,2,3,4,5,6,7,8,9,10]

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista 03 - Rafael Ferreira</Text>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Ex 01 - Lista de Frutas</Text>
        {frutas.map((fruta, index) => (
          <Text key={index}>
            {fruta}
          </Text>
        )
        )}
      </View>

      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Ex 02 - lista de produtos</Text>
        {produtos.map((produtos) => (
          <Text key={produtos.id}>
            {produtos.nome} - R${produtos.preco}
          </Text>
        ))}
      </View>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Ex 03 - Filtrar Números Pares</Text>
        <Text>{numeros
          .filter((numeros) => numeros % 2 === 0)
          .map((numeros) => (
            <Text key={numeros}>
              {numeros}
            </Text>
          ))}

        </Text>
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