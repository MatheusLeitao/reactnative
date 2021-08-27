import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native"
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'
import uuid from 'react-native-uuid'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { GuildProps } from "../../components/Guild";
import { COLLECTION_APPOINTMENTS } from "../../config/database";

import { styles } from "./styles"
import { theme } from "../../global/styles/theme";
import { Guilds } from "../Guilds";


export function AppointmentCreate() {
    const [category, setCategory] = useState('')
    const [openGuildsModal, setOpenGuildsModal] = useState(false)
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')
    const [description, setDescription] = useState('')

    const navigation = useNavigation()

    function handleModalGuilds() {
        setOpenGuildsModal(true);
    }

    function handleCloseModalGuilds() {
        setOpenGuildsModal(false);
    }

    function handleGuildSelect(guildSelected: GuildProps) {
        setGuild(guildSelected)
        setOpenGuildsModal(false);
    }

    function handleCategorySelection(categoryId: string) {
        setCategory(categoryId)
    }

    async function handleSave() {
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}`,
            description
        };

        console.log(newAppointment)

        const storage:any = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        // const appointment = storage ? JSON.parse(storage): [];
        var appointment:any = JSON.parse(storage)
        appointment = appointment.filter((item:any) => item.id != 'cdc57a7d-4a85-44e2-b76a-884c37040cb4')


        await AsyncStorage.setItem(COLLECTION_APPOINTMENTS,JSON.stringify([...appointment, newAppointment]))

        // @ts-ignore
        navigation.navigate('Home')
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Background>
                <ScrollView>
                    <Header title="Agendar Partida" />

                    <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>Categoria</Text>

                    <CategorySelect hasCheckBox setCategory={handleCategorySelection} categorySelected={category} />

                    <View style={styles.form}>
                        <RectButton rippleColor={theme.colors.secondary30} onPress={handleModalGuilds}>

                            <View style={styles.select}>
                                {
                                    guild.icon ? <GuildIcon guildId={guild.id} icon={guild.icon}/> : <View style={styles.image} />
                                }
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>{guild.name ? guild.name : "Selecione um servidor"}</Text>
                                </View>
                                <Feather name="chevron-right" color={theme.colors.heading} size={18} />
                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>Dia e mês</Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} onChangeText={setDay}/>
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput maxLength={2} onChangeText={setMonth}/>
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>Hora e minuto</Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} onChangeText={setHour}/>
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput maxLength={2} onChangeText={setMinute}/>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>Descrição</Text>
                            <Text style={styles.caracteresLimit}> Max 100 caracteres</Text>
                        </View>

                        <TextArea multiline maxLength={100} numberOfLines={5} onChangeText={setDescription}/>

                        <View style={styles.footer}>
                            <Button title="Agendar" onPress={handleSave}/>
                        </View>

                    </View>
                </ScrollView>
            </Background>
            <ModalView visible={openGuildsModal} closeModal={handleCloseModalGuilds}>
                <Guilds handleGuildSelected={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    )
}