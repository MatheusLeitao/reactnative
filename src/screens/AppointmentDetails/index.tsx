import React from "react";
import { FlatList, ImageBackground, Text, View } from "react-native"
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import ListDevider from "../../components/ListDevider";

import { styles } from "./styles"
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png'
import { ButtonIcon } from "../../components/ButtonIcon";


export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Matheus',
            avatar_url: 'https://github.com/matheusleitao.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Erisvaldo',
            avatar_url: 'https://github.com/matheusleitao.png',
            status: 'offline'
        },

    ]
    return (
        <Background>
            <Header title="Detalhes" action={
                <View>
                    <BorderlessButton>
                        <Fontisto name="share" size={21} color={theme.colors.primary} />
                    </BorderlessButton>
                </View>
            }
            />
            <ImageBackground source={BannerImg} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida na md10.
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader title="Jogadores" subtitle="Total 3" />
            <FlatList
                style={styles.members}
                data={members}
                keyExtractor={item => item.id}
                renderItem={ ({item}) => (
                    <Member data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDevider isCentered />}
            />

            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida!"/>
            </View>

        </Background>
    )
}