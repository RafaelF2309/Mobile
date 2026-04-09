import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return <View style={[styles.container, {width: "100%"}]}>
    <View style ={{height: "100%", width: "100%"}}>
        <View style={styles.header}></View>
        <View style={styles.content}></View>
        <View style={styles.footer}></View>
    </View>
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
  },
  header: {
    backgroundColor: "green",
    height: 60,
    width: "100%"
  },
  content: {
    flex: 1,
    backgroundColor: "gray",
    height: 60,
    width: "100%"
  },
  footer: {
    backgroundColor: "blue",
    height: 50,
    width: "100%"
  }
});