import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
  return <View style={styles.container}>

    <View style={styles.row}>
        <View style={[styles.box, {backgroundColor: "green"}]}/>
        <View style={[styles.box, {backgroundColor: "red"}]}/>
    </View>

    <View style={styles.row}>
        <View style={[styles.box, {backgroundColor: "blue"}]}/>
        <View style={[styles.box, {backgroundColor: "orange"}]}/>
    </View>
    
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 20
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    gap: 10
  },
  box: {
    flex: 1
  }
});