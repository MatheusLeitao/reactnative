import React from "react";
import { Alert, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

type Props = {
    onPress: () => void
}

export function Profile({ onPress }: Props) {

    const { user, SignOut } = useAuth()

    const handleSignOut = () => {
        Alert.alert("Logout", "Deseja sair da aplicação?", [
            {
                text: "Não",
                style: 'cancel'
            },
            {
                text: "Sim",
                onPress: () => { SignOut() }
            }
        ])
    }

    return (
        <View style={styles.container}>
            <RectButton onPress={onPress} rippleColor="white" style={{}}>
                <Avatar urlImage={user.avatar} />
            </RectButton>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greetings}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    )
}