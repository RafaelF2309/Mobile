import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo02 from './jsx_examples/exemplo-02-expressoes';
import lista_01 from './jsx_examples/listas/lista_01';
import Exercicio_01 from './jsx_examples/listas/lista_01';
import Lista_01 from './jsx_examples/listas/lista_01';
import Lista_02 from './jsx_examples/listas/lista_02'
import Lista_03 from './jsx_examples/listas/lista_03';
import ViewScaffold from './jsx_examples/exemplo-05-flexbox';

export default function App() {
  return (
    <View style={styles.container}>
      <ViewScaffold/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});