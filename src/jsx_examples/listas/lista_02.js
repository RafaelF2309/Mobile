import { View, Text, StyleSheet } from "react-native";

export default function Lista_02() {
    const loja_aberta =  true

    const tem_promocao = false

    const nota = 7
    const valorNota = (nota) => {
        if(nota >= 7){
            return <Text style={styles.aprovado}>Aprovado</Text>
        }if(nota >= 5){
            return <Text style={styles.recuperacao}>Recuperação</Text>
        }if(nota < 5){
            return <Text style={styles.reprovado}>Reprovado</Text>
        }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista 02 - Rafael Ferreira</Text>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Ex 01 - Operador Ternário</Text>
        <Text>Status: {loja_aberta ? "Aberta" : "Fechada"}</Text>
      </View>

      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Ex 02 - Operador &&</Text>
        <Text>Promoções:</Text>
        {tem_promocao && <Text>Promoção ativa! Aproveite os descontos</Text>}
        {!tem_promocao && <Text></Text>}
      </View>

      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Ex 03 - Condicional com Múltiplas Condições</Text>
        <Text>{valorNota(nota)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  aprovado:{
    color: 'green'
  },
  recuperacao:{
    color: 'yellow'
  },
  reprovado:{
    color: 'red'
  }
});