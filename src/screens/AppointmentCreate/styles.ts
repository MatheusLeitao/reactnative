import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

const {colors, fonts} = theme


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontFamily: fonts.title700,
        color: colors.heading,

    },
    form: {
        paddingHorizontal:24,
        marginTop: 32
    },
    select: {
        flexDirection: 'row',
        width: '100%',
        height: 68,
        borderColor: colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.secondary30
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        marginRight: 4,
        fontSize: 18,
        fontFamily: fonts.text500,
        color: colors.highlight
    },
    caracteresLimit: {
        color: colors.heading,
        fontFamily: fonts.text400,
        fontSize: 13
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56,
    },
})