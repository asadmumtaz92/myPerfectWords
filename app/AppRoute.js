import React, { useEffect } from 'react'
import {
    ImageBackground,
    StyleSheet,
    StatusBar,
} from 'react-native'

import { Colors } from './styles/color'

import { useIsFocused } from '@react-navigation/native'

import {
    splash,
} from './constant/images'

const AppRoute = ({ navigation }) => {

    const isFocused = useIsFocused()

    useEffect(() => {
        if (isFocused)
        {
            setTimeout(() => {
                navigation.navigate('Login')
            }, 1000)
        }
    }, [isFocused])

    return (
        <ImageBackground source={splash} style={styles.cover} >
            <StatusBar
                animated={true}
                backgroundColor={Colors.splash}
                barStyle='light-content'
                hidden={true}
                StatusBarAnimation='fade'
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cover: {
        flex: 1,
    }
})

export default AppRoute
