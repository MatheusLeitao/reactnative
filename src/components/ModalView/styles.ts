import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

const { colors, fonts } = theme

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
    },
    overlay: {
        flex: 1,
        backgroundColor: colors.overlay,
    },
    bar: {
        width: 39,
        height: 2,
        backgroundColor: colors.secondary30,
        alignSelf: 'center',
        marginTop: 13,
    },
})