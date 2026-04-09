import { StyleSheet, Text, View } from "react-native";

export default function ExercicioProva01() {
  return <View style={styles.container}>

    <View style={styles.topo}>
        <View style={styles.amarelo}></View>
        <View style={styles.azul}></View>
    </View>

    <View style={styles.areaCentral}>
        <View style={styles.verde}></View>
        <View style={styles.areaDireita}>
            <View style={styles.rosa}></View>
            <View style={styles.laranja}></View>
        </View>
    </View>

    <View style={styles.fundo}>
        <View style={styles.vermelho}></View>
        <View style={styles.teal}></View>
        <View style={styles.roxo}></View>
    </View>
  </View>

}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },

  topo: {
    flexDirection: "row",
    gap: 8,
    height: 100,
  },

  amarelo: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "yellow",
  },

  azul: {
    flexDirection: "column",
    flex: 3,
    backgroundColor: "blue"
  },

  areaCentral: {
    flexDirection: "row",
    flex: 1,
    gap: 8,
  },

  areaDireita:{
    flexDirection: "column",
    flex: 1,
    gap: 8
  },

  verde:{
    flex: 1,
    backgroundColor: "green",
  },

  rosa:{
    flex: 1,
    backgroundColor: "pink",
    width: "100%"
  },

  laranja:{
    flex: 1,
    backgroundColor: "orange",
    width: "100%"
  },

  fundo:{
    flexDirection: "row",
    gap: 8,
    height: 90
  },

  vermelho:{
    flex: 1,
    backgroundColor: "red",
    height: 80,
    width: 80,
    justifyContent: "center"
  },

  teal:{
    flex: 1,
    backgroundColor: "grey",
    height: 80,
    width: 80,
  },

  roxo:{
    flex: 1,
    backgroundColor: "purple",
    height:80,
    width: 80
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