import React, { useState } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Dimensions,
    Modal,
    View,
} from 'react-native'

import { Colors } from '../styles/color'

const CustomLoaderModal = () => {

    const [modalVisible, setModalVisible] = useState(true)

    return (
        <View style={styles.centeredView}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible) }
            >
                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <ActivityIndicator size='large' color={Colors.primery} />
                    </View>

                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        // backgroundColor: '#00000022',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    modalView: {
        width: Dimensions.get('window').width - 70,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 15,

        shadowColor: Colors.black,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 3,
    },
})

export default CustomLoaderModal
