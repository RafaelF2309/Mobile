import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Botao(props){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.button}> {props.titulo} </Text>
            </TouchableOpacity>
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
  button:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bac3bb"
  },
});