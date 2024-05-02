import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_inner: {
        padding: 40,
        border: '2px solid purple',
        borderRadius: 10,
        shadowColor: '#000', // cor da sombra
        shadowOffset: { width: 0, height: 2 }, // deslocamento da sombra
        shadowOpacity: 0.25, // opacidade da sombra
        shadowRadius: 3, // raio da sombra
        elevation: 5, // elevação da sombra para Android
    },
    aceitacao : {
        border: '2px green solid',
        color: 'green',
        textAlign: 'center',
        padding: 20,
        fontSize: 15,
    },
    negacao : {
        border: '2px red solid',
        color: 'red',
        textAlign: 'center',
        padding: 20,
        fontSize: 15,
    },
    botao : {
        marginBottom: 20,
    },
    esp : {
        marginBottom: 80,
    },
    namepage : {
        fontSize: 20,
        color: 'purple',
        marginBottom: 20,
    }
})