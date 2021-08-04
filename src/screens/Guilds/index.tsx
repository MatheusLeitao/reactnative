import React from "react";
import { FlatList, View } from "react-native"

import { Guild, GuildProps } from "../../components/Guild";
import ListDevider from "../../components/ListDevider";

import { styles } from "./styles"

type Props = {
    handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Sofrencia',
            icon: 'image.png',
            owner: false
        },
        {
            id: '3',
            name: 'Sofrencia',
            icon: 'image.png',
            owner: false
        },
        {
            id: '4',
            name: 'Sofrencia',
            icon: 'image.png',
            owner: false
        },
        {
            id: '5',
            name: 'Sofrencia',
            icon: 'image.png',
            owner: false
        },
        {
            id: '6',
            name: 'Sofrencia',
            icon: 'image.png',
            owner: false
        },
        {
            id: '7',
            name: 'Sofrencia',
            icon: 'image.png',
            owner: false
        },
        {
            id: '8',
            name: 'Sofrencia',
            icon: 'image.png',
            owner: false
        },
    ]
    return (
        <View style={styles.container}>
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
        </View>
    )
}