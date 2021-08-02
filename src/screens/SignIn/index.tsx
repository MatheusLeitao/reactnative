import React  from 'react';
import { Image, Text, View, StatusBar } from 'react-native';
import { styles } from './style'
import IlluastratorImg from '../../assets/illustration.png'
import {ButtonIcon} from '../../components/ButtonIcon'

export function SignIn() {


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
                <ButtonIcon title="Entrar com Discord" activeOpacity={0.6} />
            </View>
        </View>
    );
}


