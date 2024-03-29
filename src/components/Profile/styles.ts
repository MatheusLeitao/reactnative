import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    user: {
        flexDirection: "row"
    },
    greetings: {
        fontFamily: theme.fonts.title500,
        fontSize: 28,
        color: theme.colors.heading,
        marginRight: 6,
    },
    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 28,
        color: theme.colors.heading,
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    }
})
