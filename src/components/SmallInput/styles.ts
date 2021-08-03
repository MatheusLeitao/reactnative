import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

const { colors, fonts } = theme

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: colors.secondary40,
        color: colors.heading,
        borderRadius: 8,
        fontFamily: fonts.text400,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center'
    }
})