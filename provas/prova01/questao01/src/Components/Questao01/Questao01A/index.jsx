import { Text, View } from "react-native";
import { styles } from "./styles";

const Questao01A = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questão 01A</Text>
      <Text>Nome: João Victor</Text>
      <Text>Sobrenome: Aquino Correia</Text>
      <Text>Curso: Ciência da computação</Text>
    </View>
  );
};

export default Questao01A;
