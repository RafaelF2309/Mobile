import { StyleSheet, Text, View } from "react-native";

export default function PerfilAluno({nome, turma, matricula}){
    return(
        <View style={styles.container}>
            <Text>Nome: {nome}</Text>
            <Text>Turma: {turma}</Text>
            <Text>Matrícula: {matricula}</Text>
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