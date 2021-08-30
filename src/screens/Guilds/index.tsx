import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native"

import { Guild, GuildProps } from "../../components/Guild";
import ListDevider from "../../components/ListDevider";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";

import { styles } from "./styles"

type Props = {
    handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: Props) {

    const [guilds, setGuilds] = useState<GuildProps[]>([])
    const [loading, setLoading] = useState(true)

    const fetchGuilds = async () => {
        const response = await api.get('/users/@me/guilds')
        setGuilds(response.data)
        setLoading(false)
    }

    useEffect(() => { fetchGuilds() })

    return (
        <View style={styles.container}>
            {
                loading ? <Loading /> :
                <FlatList
                    style={styles.guild}
                    data={guilds}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <ListDevider isCentered/>}
                    ListHeaderComponent={() => <ListDevider isCentered/>}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 68, paddingTop: 25}}
                    renderItem={({ item }) => (
                        <Guild data={item} onPress={() => handleGuildSelected(item)} />
                    )}
                />
            }
        </View>
    )
}