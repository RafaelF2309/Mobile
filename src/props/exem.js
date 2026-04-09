import { StyleSheet, Text, View } from "react-native";

export default function CartaoPerfil({nome, idade}){
    return(
      <View style={styles.container}>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
    exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  }
});