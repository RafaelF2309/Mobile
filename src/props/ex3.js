import { StyleSheet, Text, View } from "react-native";

export default function Saudacao({nome}){
    return(
        <View style={styles.container}>
            <Text>Olá, {nome}! Bem-vindo</Text>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  }
});