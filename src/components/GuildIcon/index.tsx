import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";


export function GuildIcon() {
    const uri = 'https://i.pinimg.com/originals/1d/09/1b/1d091b4dae516de9ade0d5e8e02cf2e8.png'
    return (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
    )
}