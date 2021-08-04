import React from "react";
import { FlatList, View } from "react-native"

import { Guild, GuildProps } from "../../components/Guild";
import ListDevider from "../../components/ListDevider";

import { styles } from "./styles"

type Props = {
    handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({handleGuildSelected}: Props){
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
    ]
    return(
        <View style={styles.container}>
            <FlatList
                style={styles.guild}
                data={guilds}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListDevider/> }
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <Guild data={item} onPress={() => handleGuildSelected(item)}/>
                )}
            />
        </View>
    )
}