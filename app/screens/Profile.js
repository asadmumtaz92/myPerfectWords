import React, { useLayoutEffect, useState } from "react"
import {
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    Dimensions,
    StatusBar,
    Platform,
    FlatList,
    Alert,
    Image,
    View,
    Text,
} from "react-native"

import { Colors } from "../styles/color"
import { gStyles } from "../styles/globle"

import {
    logout_sign,
    asadMalick,
    back_sign,
    edit_sign,
    next_sign,
} from '../constant/images'

import {
    link
} from '../constant/tabData'

import CustomLoaderModal from '../utlz/CustomLoaderModal'

const deviceWidth = Dimensions.get('window').width

const Profile = ({ navigation }) => {

    const [loader, setLoader] = useState(false)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity
                        disabled={loader ? true : false}
                        onPress={() => logoutHandler()} activeOpacity={0.9}
                        style={[gStyles.navBtn, styles.nav]}
                    >
                        {loader
                            ? <ActivityIndicator size={'small'} color={Colors.white} style={{ marginRight: 10 }} />
                            : <>
                                <Image source={logout_sign} resizeMode='cover' style={styles.logoutIcon} />
                                <Text style={[gStyles.navBtnText, { fontSize: 16, }]}>{`Logout`}</Text>
                            </>
                        }

                    </TouchableOpacity>
                )
            },
            headerLeft: () => {
                return (
                    <TouchableOpacity
                        disabled={loader ? true : false}
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
    }, [navigation, loader])

    const logoutHandler = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
            setTimeout(() => {
                navigation.navigate('Login')
            }, 200);
        }, 2000)
    }
    const editProfileHandler = () => {
        Alert.alert('Edit Name & Photo', '\nOpen modal and update.')
    }
    const randerItem = (items) => {
        let item = items.item
        return (
            <TouchableOpacity style={styles.item} onPress={item.nav} activeOpacity={0.8}>
                <Text style={styles.itemText}>{item.title}</Text>
                <Image source={next_sign} style={styles.itemImg} resizeMode='cover' />
            </TouchableOpacity>
        )
    }

    return (
        <View style={[gStyles.container, { backgroundColor: '#f8faff' }]}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.buttonColor}
                barStyle='light-content'
                StatusBarAnimation='fade'
            />
                <Image source={asadMalick} style={styles.userProfileImage} resizeMode='cover' />

                <View style={styles.nameBox}>
                    <Text style={styles.name}>{`Malick Asad`}</Text>

                    <TouchableOpacity
                        onPress={() => editProfileHandler()}
                        style={{ alignItems: 'center' }} activeOpacity={0.8}
                    >
                        <Image source={edit_sign} style={{ marginLeft: 8, }} resizeMode='cover' />
                    </TouchableOpacity>
                </View>

                {/* LINK LIST */}
                <View style={{ flex: 1 }}>
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 20 }}
                        data={link}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index}
                        renderItem={randerItem}
                    />
                </View>

                {!loader && 
                    <Text style={styles.appVersionText}>
                        {`App version 1.0 (5)`}
                    </Text>
                }
                
                {loader && 
                    <CustomLoaderModal />
                }
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 0,
    },
    logoutIcon: {
        marginRight: 5,
        height: 19,
        width: 19,
    },
    navImg: {
        marginRight: 2,
        height: 14,
        width: 14,
    },

    userProfileImage: {
        borderRadius: (deviceWidth * 0.3) / 2,
        borderColor: Colors.buttonColor,
        height: deviceWidth * 0.3,
        width: deviceWidth * 0.3,
        alignSelf: 'center',
        marginBottom: 10,
        borderWidth: 3,
        marginTop: 30,
    },
    nameBox: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 30,
    },
    name: {
        color: Colors.buttonColor,
        fontWeight: '600',
        fontSize: 18,
    },

    item: {
        justifyContent: 'space-between',
        borderColor: Colors.primery,
        borderBottomWidth: 0.2,
        alignItems: 'center',
        marginHorizontal: 20,
        flexDirection: 'row',
        marginVertical: 7,
        paddingVertical: 6,
    },
    itemText: {
        color: Colors.primery,
        fontWeight: '600',
        fontSize: 18,
    },
    itemImg: {
        marginRight: 5,
        height: 20,
        width: 20,
    },

    appVersionText: {
        color: Colors.buttonDisabled,
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 15,
        marginBottom: Platform.select({
            android: 10,
            ios: 20,
        }),
    },
})

export default Profile
