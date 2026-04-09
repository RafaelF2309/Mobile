import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView01() {
  return <View style={styles.container}>
    <Text style={styles.titulo}>Coluna de três caixas</Text>
        <View style={styles.redBox}/>
        <View style={styles.blueBox}/>
        <View style={styles.greenBox}/>
  </View>;
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
  redBox: {
    height: 80,
    width: 80,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
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