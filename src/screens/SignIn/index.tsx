import React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { styles } from './style'

import IlluastratorImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background';

import { useAuth } from '../../hooks/auth';

export function SignIn() {

    const { user, SignIn } = useAuth()

    async function handleSignIn() {
        try {
            await SignIn()
        } catch (error) {
            Alert.alert(error)
        }
    }
    return (
        <Background>
            <View style={styles.container}>
                <Image source={IlluastratorImg} style={styles.image} resizeMode="stretch" />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>
                    <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} rippleColor="#d8798c" />
                </View>
            </View>
        </Background>
    );
}


