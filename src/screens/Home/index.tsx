import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { View, FlatList, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RectButton } from "react-native-gesture-handler";

import { Appointment, AppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import ListDevider from "../../components/ListDevider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { ModalLogout } from "../../components/ModalLogout";

import { styles } from "./styles";
import { Loading } from "../../components/Loading";
import { COLLECTION_APPOINTMENTS } from "../../config/database";


export function Home() {

    var total:number;

    const [category, setCategory] = useState('')
    const [appointments, setAppointments] = useState<AppointmentProps[]>()
    const [loading, setLoading] = useState(true)
    const [openGuildsModal, setOpenGuildsModal] = useState(true)

    const navigation = useNavigation();

    function handleCategorySelection(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    async function loadAppointments() {
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
        const storageAppointments: AppointmentProps | any = storage ? JSON.parse(storage) : [];
        if(category) setAppointments(storageAppointments.filter((item: AppointmentProps) => item.category == category))
        else setAppointments(storageAppointments)
        setLoading(false)
    }

    useFocusEffect(useCallback(() => { loadAppointments() }, [category]))

    // @ts-ignore
    const handleAppointmentDetails = (guildDetails: AppointmentProps) => navigation.navigate('AppointmentDetails', { guildDetails })

    // @ts-ignore
    const handleAppointmentCreate = () => navigation.navigate('AppointmentCreate')

    const handleModalGuilds = () => setOpenGuildsModal(true)

    const handleCloseModalGuilds = () => setOpenGuildsModal(false)

    return (
        <>
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile onPress={handleModalGuilds}/>
                    <ButtonAdd onPress={handleAppointmentCreate} />
                </View>

                <CategorySelect categorySelected={category} setCategory={handleCategorySelection} />

            </View>
            {
                loading ? <Loading /> :
                <>
                    <ListHeader title="Partidas Agendadas" subtitle={`Total ${appointments?.length}`} />
                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <ListDevider />}
                        contentContainerStyle={{ paddingBottom: 69 }}
                        renderItem={({ item }) => (
                            <Appointment
                                data={item}
                                onPress={() => handleAppointmentDetails(item)}
                            />
                        )}
                    />
                </>
            }

        </Background>
        <ModalLogout visible={openGuildsModal} closeModal={handleCloseModalGuilds}>
            <View style={styles.modalLogOutTexts}>
                <Text style={styles.modalLogOutText}>Deseja sair da Game<Text style={styles.modalLogoutTextPlay}>Play</Text>?</Text>
            </View>
            <View style={styles.modalLogOutButtons}>
                <View style={styles.modalLogoutButtonCancelBorder}>
                    <RectButton  style={[styles.buttonModalLogoutCancel, styles.modalLogoutButtons, {borderColor: "#495BCC !important", borderWidth: 10}]}><Text style={styles.ModalLogoutbuttonCancelText}>Não</Text></RectButton>
                </View>
                <RectButton style={[styles.buttonModalLogoutConfirm, styles.modalLogoutButtons]}><Text style={styles.ModalLogoutbuttonCancelText}>Sim</Text></RectButton>
            </View>
        </ModalLogout>
        </>
    )
}