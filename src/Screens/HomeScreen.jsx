import { Button, Text } from "react-native";
import { View } from "react-native";
import { styles } from "../config/styles";


export default function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text variant="titleLarge">Ben vindo 👍</Text>
            <Button mode="contained" 
        onPress={() => navigation.navigate("Sobre")}
        title = "Sobre"
        ></Button>
        </View>
    )
}