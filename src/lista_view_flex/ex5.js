import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
  return (
  <View style={styles.container}>

    <View style={{flexDirection: "row", gap: 8, width: '100%', height: '100%'}}>
        <View style={[styles.blueBox, {flex:1, height: '100%'}]}/>
        <View style={[styles.greenBox, {flex:1, height: '100%'}]}/>
    </View>
  </View> );
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