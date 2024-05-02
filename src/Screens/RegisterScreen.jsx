import { useState } from "react";
import { Alert, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../config/styles";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetsenha, setRepetSenha] = useState("");
  const [texto, setTexto] = useState("");
  const [estilo, setEstilo] = useState();

  const Revisao = () => {
    if (email === "" || senha === "" || repetsenha === "") {
      setTexto("Preencha os campos acima!!!");
      setEstilo(styles.negacao);
      return;
    } else if (senha !== repetsenha) {
      setTexto("As senha não batem!!!");
      setEstilo(styles.negacao);
      return;
    } else {
      setTexto("Sucesso", "Registro bem-sucedido!");
      setEstilo(styles.aceitacao);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text style={styles.namepage}>Logout to continued</Text>
        <TextInput
          label={"📧Email"}
          placeholder={"Digite o seu email"}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label={"🔒Senha"}
          placeholder={" Digite a sua senha"}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry //para esconder a senha
        />{" "}
        <TextInput
          label={"🔒Confirme a senha"}
          placeholder={" Digite a sua senha novamente"}
          value={repetsenha}
          onChangeText={setRepetSenha}
          secureTextEntry //para esconder a senha
          style={styles.esp}
        />
        <Button mode="contained" onPress={Revisao}>
          Cadastro
        </Button>
        <Text>{'\n\n'}</Text>
        <Text style={estilo}>{texto}</Text>
      </View>
    </View>
  );
}
