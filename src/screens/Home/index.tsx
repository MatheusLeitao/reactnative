import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Appointment, AppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import ListDevider from "../../components/ListDevider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { COLLECTION_APPOINTMENTS } from "../../config/database";

import { styles } from "./styles";
import { Loading } from "../../components/Loading";


export function Home() {

    var total:number;

    const [category, setCategory] = useState('')
    const [appointments, setAppointments] = useState<AppointmentProps[]>()
    const [loading, setLoading] = useState(true)

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

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]))

    function handleAppointmentDetails(guildDetails: AppointmentProps) {
        // @ts-ignore
        navigation.navigate('AppointmentDetails', { guildDetails })
    }

    function handleAppointmentCreate() {
        // @ts-ignore
        navigation.navigate('AppointmentCreate')
    }

    return (
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile />
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
    )
}