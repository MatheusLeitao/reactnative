import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: getStatusBarHeight() +  26,
        marginBottom: 42
    },
    matches: {
        marginTop: 24,
        marginLeft: 24
    },
    modalLogOutTexts: {
        alignItems: "center",
        padding: 15,
        paddingBottom:20
    },
    modalLogOutButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    modalLogoutButtons: {
        width: 160,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonModalLogoutConfirm: {
        backgroundColor: theme.colors.primary,
    },
    buttonModalLogoutCancel: {
        backgroundColor: theme.colors.secondary80,
        borderColor: theme.colors.secondary30,
        borderWidth: 5,
    },
    modalLogoutButtonCancelBorder: {
        width: 160,
        height: 56,
        borderWidth: 1,
        borderRadius:8,
        borderColor: theme.colors.secondary30,
        overflow: "hidden"

    },
    ModalLogoutbuttonCancelText: {
        flex: 1,
        color: theme.colors.heading,
        textAlign: 'center',
    },
    modalLogOutText: {
        fontSize: 28,
        color: theme.colors.heading,
        alignItems: "center",
        fontFamily: theme.fonts.title500
    },
    modalLogoutTextPlay:{
        color: theme.colors.primary,
        fontWeight: "bold"
    },


})

