import React, { useState, useEffect } from "react";
import { Alert, FlatList, ImageBackground, Text, View, Platform, Share } from "react-native"
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import * as Linking from 'expo-linking'
import { useToast } from "react-native-toast-notifications";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member, MemberProps } from "../../components/Member";
import ListDevider from "../../components/ListDevider";
import { AppointmentProps } from "../../components/Appointment";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Loading } from "../../components/Loading";

import { styles } from "./styles"
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png'
import { api } from "../../services/api";


type Params = {
    guildDetails: AppointmentProps
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
    presence_count: number;
}

export function AppointmentDetails() {

    const route = useRoute();
    const Toast = useToast();
    const { guildDetails } = route.params as Params

    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
    const [loading, setLoading] = useState(true)
    const [widgetState, setWidgetState] = useState(false)


    const fetchGuildInfo = async () => {
        try {
            const response = await api.get(`/guilds/${guildDetails.guild.id}/widget.json`)
            setWidget(response.data)
            setWidgetState(true)
        } catch (error) {
            // Alert.alert('Verify server settings. Is server\'s widget enabled?')
            Toast.show("Verify server settings. Is server\'s widget enabled?", {
                type: "danger",
                placement: "bottom",
                duration: 5000,
                animationType: "slide-in",
            })
        } finally {
            setLoading(false)
        }
    }

    const handleShareInvitation = () => {
        if(typeof widget.instant_invite != 'object' && widget.instant_invite != 'null'){
            const message = Platform.OS == 'ios'
                ? `Junte-se a ${guildDetails.guild.name}`
                : widget.instant_invite
            Share.share({ message, url: widget.instant_invite })
        }else{
            // Alert.alert(`Server doesn't have any invitation url.`)
            Toast.show("Server doesn't have any invitation url.")
        }
    }

    const handleOpenGuild = () => {
        console.log('Is it getting here?')
        Linking.openURL(widget.instant_invite)
    }

    useEffect(() => {
        fetchGuildInfo();
    }, [])

    return (
        <Background>
            <Header title="Detalhes" action={
                <View>
                    <BorderlessButton onPress={handleShareInvitation}>
                        <Fontisto name="share" size={21} color={theme.colors.primary} />
                    </BorderlessButton>
                </View>
            }
            />
            <ImageBackground source={BannerImg} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        {guildDetails.guild.name}
                    </Text>
                    <Text style={styles.subtitle}>
                        {guildDetails.description}
                    </Text>
                </View>
            </ImageBackground>
            {
                loading ? <Loading /> :
                    <>
                        <ListHeader title="Jogadores" subtitle={`Total ${widget.members?.length ? widget.members.length : '0'}`} />
                        <FlatList
                            style={styles.members}
                            data={widget.members}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Member data={item} />
                            )}
                            ItemSeparatorComponent={() => <ListDevider isCentered />}
                        />
                    </>
            }

            {
                (widgetState)
                ?
                <>
                <View style={styles.footer}>
                    <ButtonIcon title="Entrar na partida!"  onPress={handleOpenGuild}/>
                </View>
                </>
                :
                <>
                <View style={styles.footerDisabled}>
                    <ButtonIcon title="Entrar na partida!" />
                </View>
                </>
            }

        </Background>
    )
}