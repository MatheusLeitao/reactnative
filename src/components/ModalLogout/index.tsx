import React, { ReactNode } from "react";
import { Modal, ModalProps, Text, View, TouchableWithoutFeedback } from "react-native"
import { Background } from "../Background";

import { styles } from "./styles"

type Props = ModalProps & {
    children: ReactNode
    closeModal?: () => void
}

export function ModalLogout({ children, closeModal, ...rest }: Props) {
    return (
        <Modal transparent animationType="slide" {...rest} statusBarTranslucent>
            <TouchableWithoutFeedback
                onPress={closeModal}
                onPressIn={() => {console.log("in")}}
                onPressOut={() => {console.log('Out')}}
                onLongPress={() => {console.log("WTF is going on!!!")}}
                >
                <View style={styles.overlay} {...rest}>
                    <View style={styles.container}>
                        <Background>
                            {/* <View style={styles.bar} /> */}
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}