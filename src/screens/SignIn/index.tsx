import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from './style'

export function SignIn() {

    const [text, setText] = useState('Matheus')

    return (
        <View style={styles.container}>
            <Text>Chill daddy!</Text>
            <StatusBar style="auto" />
            <TextInput style={styles.input} onChangeText={(value) => setText(value)} />
            <Text>You've typed: {text}</Text>
        </View>
    );
}


