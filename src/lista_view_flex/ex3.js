import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView03() {
  return <View style={styles.container}>
    <Text style={styles.titulo}>Espaçamento com space-between</Text>
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <View style={styles.redBox}>
            <Text style={styles.textStyle}>R</Text>
        </View>
        <View style={styles.blueBox}>
            <Text style={styles.textStyle}>B</Text>
        </View>
        <View style={styles.greenBox}>
            <Text style={styles.textStyle}>G</Text>
        </View>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 70,
    width: 70,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 70,
    width: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 70,
    width: 70,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  }
});