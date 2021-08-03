import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { Fontisto } from '@expo/vector-icons';

import { styles } from "./styles"
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string
    action?: ReactNode;
}

export function Header({ title, action }: Props) {
    const { secondary100, secondary40, heading } = theme.colors
    const { goBack } = useNavigation();

    function handleGoBack() {
        goBack()
    }

    // console.log(action)

    return (
        <View style={styles.wrapper}>
            <LinearGradient colors={[secondary100, secondary40]} style={styles.container}>
                <BorderlessButton onPress={handleGoBack}>
                    <Feather name="arrow-left" size={24} color={heading} />
                </BorderlessButton>

                <Text style={styles.title}>
                    {title}
                </Text>

                {
                    action ? action : <View style={{ width: 24 }} />
                }

            </LinearGradient>
        </View>
    )
}