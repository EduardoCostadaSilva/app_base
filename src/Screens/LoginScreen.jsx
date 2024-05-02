import { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../config/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [texto, setTexto] = useState("");
  const [estilo, setEstilo] = useState();

  const Avisos = () => {
    if (email === "" || senha === "") {
      setTexto("Preencha os campos acima!!!");
      setEstilo(styles.negacao);
      return;
    } else {
      setTexto("Sucesso!!!");
      setEstilo(styles.aceitacao);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text style={styles.namepage}>{/*<Image source={require('../../assets/imagem.png')}/>*/}Login to continued</Text>
        <TextInput
          label={"📧Email"}
          placeholder={"Digite o seu email"}
          value={email}
          onChangeText={setEmail}

        />
        <TextInput
          label={"🔒Senha"}
          placeholder={"Digite a sua senha"}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry //para esconder a senha
          style={styles.esp}
        />
        <Button mode="contained" onPress={Avisos} style={styles.botao}>
          Login
        </Button>

        <Button mode="elevated" onPress={() => navigation.navigate("Register")}>
          Cadastro
        </Button>
        <Text>{"\n\n"}</Text>
        <Text style={estilo}>{texto}</Text>
      </View>
    </View>
  );
}
