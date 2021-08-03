import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const colors = theme.colors
const fonts = theme.fonts

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 1,
        backgroundColor: colors.secondary40,
        marginVertical: 21,
        alignSelf: 'flex-end'
    },

})