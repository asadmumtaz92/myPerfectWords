// LINK:  https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31197710#overview
// LINK:  https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31197712#overview
import React from 'react'
import {
    StyleSheet,
    Text,
} from 'react-native'

import { Colors } from '../styles/color'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import AppRoute from '../AppRoute'

import Login from '../screens/index'
import Register from '../screens/Register'
import Forgot from '../screens/Forgot'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import AboutApp from '../screens/AboutApp'
import ChangeEmail from '../screens/ChangeEmail'
import ChangePassword from '../screens/ChangePassword'

const Stack = createNativeStackNavigator()

const MyStackNavigations = () => {

    const myTitle = (title) => {
        return (
            title && <Text style={styles.title}>{title}</Text>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='AppRoute'
                screenOptions={{
                    headerTitleStyle: styles.headerTitleStyle,
                    headerStyle: styles.headerStyle,
                    headerBackTitleVisible: false, // hide backScreen name
                    headerTintColor: Colors.white,
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerShown: true,
                    headerBackVisible: false, // hide back arrrow icon
                }}
            >
                <Stack.Screen
                    name='AppRoute'
                    component={AppRoute}
                    options={{
                        headerTitle: () => myTitle('App Route'),
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                <Stack.Screen
                    name='Register'
                    component={Register}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                <Stack.Screen
                    name='Forgot'
                    component={Forgot}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                <Stack.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                <Stack.Screen
                    name='AboutApp'
                    component={AboutApp}
                    options={{
                        headerTitle: () => myTitle('About App'),
                    }}
                />
                <Stack.Screen
                    name='ChangePassword'
                    component={ChangePassword}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                <Stack.Screen
                    name='ChangeEmail'
                    component={ChangeEmail}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    title: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 16,
    },
    headerStyle: {
        backgroundColor: Colors.primery,
    },
    headerTitleStyle: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 16,
    },
})

export default MyStackNavigations
