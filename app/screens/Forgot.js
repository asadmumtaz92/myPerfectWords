import React, { useState, useLayoutEffect } from "react"
import {
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    StatusBar,
    TextInput,
    Keyboard,
    Platform,
    Image,
    View,
    Text,
} from "react-native"

import { Colors } from "../styles/color"
import { gStyles } from "../styles/globle"

import { BASE_URL, API } from '../enviroments/index'

import {
    bgCover,
    at_sign,
} from '../constant/images'

import CustomModal from '../utlz/CustomModal'

const Forgot = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [succes, setSucces] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <Text style={gStyles.navBtnText}>{``}</Text>
                )
            },
            headerRight: () => {
                return (
                    <TouchableOpacity
                        disabled={loader ? true : false}
                        onPress={() => loginHandler()} style={gStyles.navBtn} activeOpacity={0.9}
                    >
                        <Text style={gStyles.navBtnText}>{`LOG IN`}</Text>
                    </TouchableOpacity>
                )
            },
        })
    }, [navigation])

    const emailHandler = (text) => {
        setEmail(text)
    }
    const loginHandler = () => {
        navigation.navigate('Login')
    }

    const forgotHandler = () => {
        setLoader(true)
        Keyboard.dismiss()

        if (!email.length) {
            setTimeout(() => {
                setTitle('Warnging Message')
                setDesc('Please enter valid email first!')
                setError(true)
            }, 1000)
        } 
        else {
            console.log('Email: ', email)
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
                let tex = `Please  check your ${email} email`
                setDesc(tex)
                setSucces(true)
            }, 1000)
        }
    }

    const leftClickAble = () => {
        setSucces(false)

        setLoader(false)
        setTimeout(() => {
            loginHandler()
        }, 200)
    }

    return (
        <ImageBackground source={bgCover} style={gStyles.bgCover}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.buttonColor}
                barStyle='light-content'
                StatusBarAnimation='fade'
            />

            <KeyboardAvoidingView style={gStyles.bgCover} behavior={Platform.OS == 'ios' ? 'position' : loader || succes ? 'position' : 'height'} >
                <View style={gStyles.bottomView}>

                    {/* HEADING */}
                    <Text style={gStyles.heading}>
                        {`Forgot Password`}
                    </Text>

                    {/* EMAIL */}
                    <View style={gStyles.ipItem}>
                        <Image
                            source={at_sign}
                            style={gStyles.icon} resizeMode='contain'
                        />
                        <TextInput
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onChangeText={(text) => emailHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            keyboardType='email-address'
                            selectTextOnFocus={false}
                            placeholder="YOUR E-MAIL"
                            autoCapitalize='none'
                            autoCorrect={false}
                            spellCheck={false}
                            style={gStyles.ip}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            inputMode='email'
                            maxLength={200}
                            value={email}
                        />
                    </View>

                    {/* SUBMIT */}
                    <TouchableOpacity
                        disabled={loader ? true : false}
                        onPress={() => forgotHandler()} style={gStyles.largeBtn} activeOpacity={0.9}
                    >
                        {loader
                            ? <ActivityIndicator size={'small'} color={Colors.white} />
                            : <Text style={gStyles.largeBtnText}>{`SUBMIT`}</Text>
                        }
                    </TouchableOpacity>

                    {/* NOTE */}
                    <Text style={styles.text}>
                        <Text style={styles.note}>{`Note:  `}</Text>
                        {`Please enter your registered email & after submit check your email for varification.`}
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
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.buttonColor,
        marginHorizontal: 5,
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

export default Forgot
