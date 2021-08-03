import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Text } from "react-native";

import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import ListDevider from "../../components/ListDevider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";


export function Home() {

    const [category, setCategory] = useState('')
    const navigation = useNavigation();


    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
        }
    ]

    function handleCategorySelection(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails() {
        // @ts-ignore
        navigation.navigate('AppointmentDetails')
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
                    <ButtonAdd onPress={handleAppointmentCreate}/>
                </View>

                <CategorySelect categorySelected={category} setCategory={handleCategorySelection} />

                <View style={styles.content}>
                    <ListHeader title="Partidas Agendadas" subtitle="Total 6" />

                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <ListDevider />}
                        renderItem={({ item }) => (
                            <Appointment
                                data={item}
                                onPress={handleAppointmentDetails}
                            />
                        )}
                    />

                </View>
            </View>
        </Background>
    )
}