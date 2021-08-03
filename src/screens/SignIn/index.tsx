import React  from 'react';
import { Image, Text, View, StatusBar } from 'react-native';
import { styles } from './style'
import IlluastratorImg from '../../assets/illustration.png'
import {ButtonIcon} from '../../components/ButtonIcon'
import { useNavigation } from '@react-navigation/native';

export function SignIn() {

    const navigation = useNavigation();

    function handleSignIn() {
        // @ts-ignore
        navigation.navigate('Home')
    }
    return (
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
                <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} rippleColor="#d8798c"/>
            </View>
        </View>
    );
}


