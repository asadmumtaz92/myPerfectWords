import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    StatusBar,
} from 'react-native'

import { Colors } from './app/styles/color'

import MyStackNavigations from './app/navigations/MyNavigation'

import {
    splash,
} from './app/constant/images'

const App = () => {

    return (
        <ImageBackground source={splash} style={styles.cover} >
            <StatusBar
                animated={true}
                backgroundColor={Colors.splash}
                barStyle='light-content'
                StatusBarAnimation='fade'
            />

            <MyStackNavigations />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cover: {
        flex: 1,
    }
})

export default App
