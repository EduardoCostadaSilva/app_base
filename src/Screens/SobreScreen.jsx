import { ScrollView, Text, View } from "react-native";
import { styles } from "../config/styles";

export default function SobreScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Sobre Page ❤💕💕❤❤💕</Text>
        <Text style={styles.container_inner}>
          O Lorem Ipsum é um texto modelo da indústria tipográfica e de
          impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
          estas indústrias desde o ano de 1500, quando uma misturou os
          caracteres de um texto para criar um espécime de livro. Este texto não
          só sobreviveu 5 séculos, mas também o salto para a tipografia
          electrónica, mantendo-se essencialmente inalterada. Foi popularizada
          nos anos 60 com a disponibilização das folhas de Letraset, que
          continham passagens com Lorem Ipsum, e mais recentemente com os
          programas de publicação como o Aldus PageMaker que incluem versões do
          Lorem Ipsum. Porque é que o usamos? É um facto estabelecido de que um
          leitor é distraído pelo conteúdo legível de uma página quando analisa
          a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma
          distribuição mais ou menos normal de letras, ao contrário do uso de
          "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas
          ferramentas de publicação electrónica e editores de páginas web usam
          actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e
          uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na
          sua infância. Várias versões têm evoluído ao longo dos anos, por vezes
          por acidente, por vezes propositadamente (como no caso do humor).
        </Text>
      </ScrollView>
    </View>
  );
}
