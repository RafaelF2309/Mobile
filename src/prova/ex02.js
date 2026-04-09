import { StyleSheet, Text, View } from "react-native";

export default function ExercicioProva02() {
    return <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.aside}></View>
          
          

          <View style={styles.main}>
            
            <View style={styles.header}></View>

            <View style={styles.superior}>
              <View style={styles.verde}></View>
              <View style={styles.azul}></View>
            </View>

            <View style={styles.circle}></View>

            <View style={styles.inferior}>
              <View style={styles.vermelho}></View>
              <View style={styles.laranja}></View>
              <View style={styles.roxo}></View>
            </View>
            
            <View style={styles.footer}></View>
            
          </View>

        </View>
    </View>
}


const styles = StyleSheet.create({
    container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },

  header: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#2c3e50",
    gap: 8,
    borderRadius: 8
  },

  body:{
    flexDirection: "row",
    flex:1,
    backgroundColor: "#1a1a1a"
  },

  aside:{
    backgroundColor: "#95a5a6",
    width: 60,
    borderRadius: 8
  },

  main:{
    flexDirection: "column",
    flex: 1,
    padding: 8,
    gap: 8,
    backgroundColor: "#1a1a1a",
    borderRadius: 8
  },

  superior:{
    flexDirection: "row",
    gap: 8,
    flex: 1
  },

  verde:{
    flex: 1,
    backgroundColor: "green",
    borderRadius: 8
  },

  azul:{
    flex: 1,
    backgroundColor: "blue",
    borderRadius: 8
  },

  circle:{
    flexDirection: "column",
    borderRadius: 25,
    backgroundColor: "#34495e",
    width: 50,
    height: 50,
    alignSelf: "center"
  },

  inferior:{
    flex: 1,
    flexDirection: "row",
    gap: 8
  },

  vermelho:{
    flex: 1,
    backgroundColor: "red",
    borderRadius: 8
  },

  laranja:{
    flex: 2,
    backgroundColor: "orange",
    borderRadius: 8
  },

  roxo:{
    flex: 1,
    backgroundColor: "purple",
    borderRadius: 8
  },

  footer:{
    height: 50,
    backgroundColor: "#2c3e50",
    borderRadius: 8
  }
})