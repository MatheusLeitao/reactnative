import React from "react";
import { View } from "react-native";
import { Image } from "react-native";

import { styles } from "./styles";
import DiscordSvg from "../../assets/discord.svg"

const { CDN_IMAGE } = process.env

type Props = {
    guildId: string
    icon: string | null

}

export function GuildIcon({ guildId, icon }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${icon}.png`;

    return (
        <View style={styles.container}>
            {
                icon ? <Image source={{ uri }} style={styles.image} resizeMode="cover" /> : <DiscordSvg width={40} height={40} />
            }
        </View>
    )
}