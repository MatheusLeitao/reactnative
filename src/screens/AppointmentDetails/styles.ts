import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme'

const {colors, fonts} = theme


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row'

    },
    banner: {
        width: '100%',
        height: 234,
        opacity: 0.8,

    },
    bannerContent: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'flex-end',
        marginBottom:30
    },
    title: {
        fontSize: 28,
        fontFamily: fonts.title700,
        color: colors.heading,
    },
    subtitle: {
        fontSize: 13,
        fontFamily: fonts.text400,
        color: colors.heading,
        lineHeight: 21
    },
    members: {
        marginLeft: 24,
        marginTop:27
    },
    footer:{
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    },
    footerDisabled:{
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace(),
        opacity: 0.4
    },
})