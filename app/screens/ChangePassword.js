import React, { useState, useLayoutEffect } from "react"
import {
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    TextInput,
    Keyboard,
    Image,
    View,
    Text,
} from "react-native"

import { Colors } from "../styles/color"
import { gStyles } from "../styles/globle"

import { BASE_URL, API } from '../enviroments/index'

import LogoBox from '../components/logoBox'

import {
    back_sign,
    at_sign
} from '../constant/images'

import CustomModal from '../utlz/CustomModal'

const ChangePassword = ({ navigation }) => {

    const [newPassword, setNewPassword] = useState('')
    const [prevPassword, setPrevPassword] = useState('')
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [succes, setSucces] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            // headerRight: () => {
            //     return (
            //         <TouchableOpacity
            //             onPress={() => changePasswordHandler()} activeOpacity={0.9}
            //             style={gStyles.navBtn}
            //         >
            //             <Text style={gStyles.navBtnText}>{`SAVE`}</Text>
            //         </TouchableOpacity>
            //     )
            // },
            headerLeft: () => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()} activeOpacity={0.9}
                        style={[gStyles.navBtn, styles.nav]}
                    >
                        <Image
                            source={back_sign} resizeMode='cover' style={styles.navImg}
                        />
                        <Text style={[gStyles.navBtnText, { fontSize: 16, }]}>{`BACK`}</Text>
                    </TouchableOpacity>
                )
            },
        })
    }, [navigation])

    const newPasswordHandler = (text) => {
        setNewPassword(text)
    }
    const prevPasswordHandler = (text) => {
        setPrevPassword(text)
    }
    const profileHandler = () => {
        navigation.navigate('Profile')
    }

    const changePasswordHandler = () => {
        setLoader(true)
        Keyboard.dismiss()
        console.log('Old: ', prevPassword, '\nNew: ', newPassword)

        if (!prevPassword.length || !newPassword.length ) {
            setTimeout(() => {
                setTitle('Warnging Message')
                setDesc('Please enter previous & new password first!')
                setError(true)
            }, 1000)
        }
        else {
            // console.log('Email: ', email)
            // try {
            //     fetch(`${API}/login`, {
            //         method: 'POST',
            //         body: JSON.stringify({
            //             email: email,
            //             password: password,
            //         }),
            //         headers: {
            //             'Content-type': 'application/json',
            //         },
            //     })
            //         .then(response => response.json())
            //         .then(response => {
            //             if (!response['errors']) {
            //                 console.log('User login Successfully!') // console.log('L85: ', response.success.token)
            //                 // if (response.success.token.length > 0) {
            //                 //     navigation.navigate('Reservations', {
            //                 //         token: response.success.token,
            //                 //     })
            //                 //     storeUserToken(response.success.token)
            //                 // }
            //                 setTimeout(() => {
            //                     setLoader(false)
            //                     navigation.navigate('Home')
            //                 }, 2000)
            //             }
            //         })
            //         .catch(error => {
            //             console.log('Login API Error: ', error)

            //             setTitle('Login Error')
            //             let tt = `Enter valid Email & Password...! ${error}`
            //             let er = error
            //             setDesc(tt)
            //             setError(true)
            //         })
            // } catch (err) {
            //     console.log('Login Try Catch Error: ', err)
            // }

            setTimeout(() => {
                setTitle('Success Message')
                setDesc(`Your password has been changed successfully!`)
                setSucces(true)
            }, 1000)
        }
    }

    const leftClickAble = () => {
        setSucces(false)

        setLoader(false)
        setTimeout(() => {
            profileHandler()
        }, 200)
    }

    return (
        <View style={gStyles.container}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.buttonColor}
                barStyle='light-content'
                StatusBarAnimation='fade'
            />

            <LogoBox />

            <KeyboardAvoidingView style={{ justifyContent: 'flex-end' }} behavior={Platform.OS == 'ios' ? 'padding' : 'height'} >
                <View style={gStyles.bottomView}>

                    {/* HEADING */}
                    <Text style={gStyles.heading}>
                        {`Change Password`}
                    </Text>

                    {/* PREVIOUS PASSWORD */}
                    <View style={gStyles.ipItem}>
                        <Image
                            source={at_sign} style={gStyles.icon} resizeMode='contain'
                        />
                        <TextInput
                            onChangeText={(text) => prevPasswordHandler(text)}
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            placeholder='PREVIOUS PASSWORD'
                            keyboardType='email-address'
                            selectTextOnFocus={false}
                            secureTextEntry={true}
                            autoCapitalize='none'
                            value={prevPassword}
                            autoCorrect={false}
                            spellCheck={false}
                            style={gStyles.ip}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            inputMode='none'
                            maxLength={200}
                        />
                    </View>

                    {/* NEW PASSWORD */}
                    <View style={gStyles.ipItem}>
                        <Image
                            source={at_sign} style={gStyles.icon} resizeMode='contain'
                        />
                        <TextInput
                            onChangeText={(text) => newPasswordHandler(text)}
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            keyboardType='email-address'
                            placeholder='NEW PASSWORD'
                            selectTextOnFocus={false}
                            secureTextEntry={true}
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={newPassword}
                            spellCheck={false}
                            style={gStyles.ip}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            inputMode='none'
                            maxLength={200}
                        />
                    </View>

                    {/* SUBMIT */}
                    <TouchableOpacity
                        disabled={loader ? true : false}
                        onPress={() => changePasswordHandler()} style={gStyles.largeBtn} activeOpacity={0.9}
                    >
                        {loader
                            ? <ActivityIndicator size={'small'} color={Colors.white} />
                            : <Text style={gStyles.largeBtnText}>{`SUBMIT`}</Text>
                        }
                    </TouchableOpacity>

                    {/* NOTE */}
                    <Text style={styles.text}>
                        <Text style={styles.note}>{`Note:  `}</Text>
                        {`Please enter your old & new password. After submit check your email for varification.`}
                    </Text>

                </View>

                {/* MODAL FOR REGISTR ERROR */}
                <>
                    {error &&
                        <CustomModal
                            title={title}
                            desc={desc}

                            clickAbleRight={() => {
                                setError(false)
                                setLoader(false)
                            }}
                            buttonRightText='ok'
                            // buttonRightStyle={{}}
                            // buttonRightTextStyle={{}}

                            // clickAbleLeft={() => { setLoader(false) }}
                            // buttonLeftText='no'
                            // buttonLeftStyle={{}}
                            // buttonLeftTextStyle={{}}

                            // image={lock_sign}
                            // imageStyle={{ width: 30, height: 30 }}
                        />
                    }
                </>

                {/* MODAL FOR REGISTER SUCCESS */}
                <>
                    {succes &&
                        <CustomModal
                            title={title}
                            desc={desc}

                            clickAbleRight={leftClickAble}
                            buttonRightText='ok'
                            // buttonRightStyle={{}}
                            // buttonRightTextStyle={{}}

                            // clickAbleLeft={() => { setLoader(false) }}
                            // buttonLeftText='no'
                            // buttonLeftStyle={{}}
                            // buttonLeftTextStyle={{}}

                            // image={lock_sign}
                            // imageStyle={{ width: 30, height: 30 }}
                        />
                    }
                </>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 0,
    },
    navImg: {
        marginRight: 2,
        height: 14,
        width: 14,
    }, 
    text: {
        color: Colors.buttonColor,
        marginHorizontal: -6,
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 20,
        marginTop: 10,
        fontSize: 16,
    },
    note: {
        fontWeight: '700',
        lineHeight: 25,
        fontSize: 20,
    },
})

export default ChangePassword
