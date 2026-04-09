import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
  return (
    <View style={[styles.container, { flexDirection: "row", gap: 0 }]}>
      
      <View style={[styles.greyBox, { width: 80, height: "100%" }]}>
        <Text style={[styles.textStyle,]}>
          Sidebar
        </Text>
      </View>
      <View style={{ flex: 1, padding: 10, gap: 10 }}>
        
        <View style={[styles.greenBox, { flex: 1, width: "100%", height: "100" }]}>
          <Text style={styles.textStyle}>Card 1</Text>
        </View>

        <View style={[styles.redBox, { flex: 1, width: "100%", height: "100", backgroundColor: "orange" }]}>
          <Text style={styles.textStyle}>Card 2</Text>
        </View>

        <View style={[styles.blueBox, { flex: 1, width: "100%", height: "100" }]}>
          <Text style={styles.textStyle}>Card 3</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch", 
    justifyContent: "flex-start",
    flex: 1,
  },
  textStyle: {
    color: "black",
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
  greyBox: {
    height: 120,
    width: 120,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});