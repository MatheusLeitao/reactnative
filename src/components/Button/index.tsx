import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from 'react-native';


import DiscordImg from '../../assets/discord.png'
import { styles } from "./styles";

type Props = RectButtonProps & {
    title: string,
    rippleColor?: string
}

export function Button({ title, rippleColor = '#fff', ...rest }: Props) {
    return (
        <RectButton style={styles.container} {...rest} rippleColor={rippleColor}>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}