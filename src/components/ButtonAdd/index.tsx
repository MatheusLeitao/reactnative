import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
    rippleColor?: string
}


export function ButtonAdd({rippleColor = '#fff', ...rest}: Props){
    return(
        <RectButton {...rest} style={styles.container}>
            <MaterialCommunityIcons name='plus' color={theme.colors.heading} size={24}/>
        </RectButton>
    )
}