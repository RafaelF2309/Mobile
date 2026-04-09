import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExercicioView08 from './lista_view_flex/ex8';
import ExercicioProva01 from './prova/ex01';
import ExercicioProva02 from './prova/ex02';
import CartaoPerfil from './props/exem';
import CardProduto from './props/ex1';
import CartaoUsuario from './props/ex2';
import Saudacao from './props/ex3';
import PerfilAluno from './props/ex4';
import Botao from './props/ds';

export default function App() {
  return (
    <View style={styles.container}>
      <Botao titulo={'entrar'}/>
      <Botao titulo={'sair'}/>
      <Botao titulo={'cadastrar'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
});