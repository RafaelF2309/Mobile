import { StyleSheet, Text, View } from "react-native";

export default function CartaoUsuario({nome, email}){
    return(
        <View style={styles.container}>
            <Text>{nome} - {email}</Text>
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