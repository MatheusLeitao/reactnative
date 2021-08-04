import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const colors = theme.colors
const fonts = theme.fonts

export const styles = StyleSheet.create({
    container: {
        width: '75%',
        height: 1,
        backgroundColor: colors.secondary40,
        marginTop:1.8,
        marginVertical: 31,
        alignSelf: 'flex-end'
    },

})