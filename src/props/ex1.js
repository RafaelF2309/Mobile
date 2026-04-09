import { StyleSheet, Text, View } from "react-native";

export default function CardProduto({produto, preco}){
    return(
        <View style={styles.container}>
            <Text>Produto: {produto}</Text>
            <Text>Preço: R${preco}</Text>
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