import React, { useLayoutEffect } from "react"
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    StatusBar,
    Platform,
    Image,
    View,
    Text,
    Linking,
} from "react-native"

import { Colors } from "../styles/color"
import { gStyles } from "../styles/globle"

import {
    back_sign,
    linkedIN,
    gitHub,
    instagram,
    behance,
    userProfile
} from '../constant/images'

import {
    team
} from '../constant/tabData'

const AboutApp = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => { },
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

    const LinkItem = (links, soIcon) => {
        return (
            <TouchableOpacity style={styles.socialBtn}
                onPress={() => Linking.openURL(links)}
            >
                <Image source={soIcon} style={styles.socialIcon} resizeMode='contain' />
            </TouchableOpacity>
        )
    }

    const randerItem = (item, index) => {
        return (
            <View style={styles.teamBox} key={index}>
                <Image 
                    source={item.image ? item.image : userProfile} 
                    resizeMode={!item.image ? 'contain' : 'cover'}
                    style={[styles.userImage, !item.image && {opacity:0.5}]}
                />

                <View style={styles.detailBox}>
                    <Text style={styles.username}>
                        {item.name}
                    </Text>
                    <Text style={styles.desig}>
                        {item.desi}
                    </Text>

                    <View style={styles.socialLink}>
                        {item.linkedin && LinkItem(item.linkedin, linkedIN)}
                        {item.github && LinkItem(item.github, gitHub)}
                        {item.instagram && LinkItem(item.instagram, instagram)}
                        {item.behance && LinkItem(item.behance, behance)}
                    </View>
                </View>
            </View>
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

            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                {/* ABOUT APP DESCRIPTION */}
                <View style={styles.appNoteBox}>
                    <Text style={styles.appName}>
                        <Text style={styles.appNote}>
                            {`myPerfect Words `}
                        </Text>
                        is the ultimate tool for teams looking to streamline their communication
                        and workflow. With a user-friendly interface and a wide range of features,
                        including real-time messaging, file sharing, and collaboration tools, you can 
                        stay connected with your team and get work done faster and more efficiently than 
                        ever before. Whether you're working in the office or remotely, our app ensures 
                        that you're always in touch with your team, no matter where you are. With 
                        customizable notifications and channels, you can prioritize what's most important 
                        and stay on top of your workload.
                    </Text>
                </View>

                {/* TEAM LIST */}
                <View style={styles.box}>
                    {team.map((item, index) => {
                        return randerItem(item, index)
                    })}
                </View>
            </ScrollView>
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

    appNoteBox: {
        marginHorizontal: 20,
        marginTop: 15,
    },
    appNote: {
        color: Colors.primery,
        alignSelf: 'center',
        fontWeight: '500',
        lineHeight: 30,
        fontSize: 26,
    },
    appName: {
        textAlign: 'justify',
        color: Colors.black,
        fontWeight: '400',
        marginBottom: 30,
        fontSize: 17,
    },

    box: {
        // paddingBottom: Platform.select({ 
        //     android: 5,
        //     ios: 20,
        // })
    },
    teamBox: {
        borderBottomColor: Colors.gray,
        borderBottomWidth: 0.5,
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 15,
        marginBottom: 15,
    },
    userImage:{
        borderRadius: 45, // (deviceWidth * 0.2)/2,
        borderColor: Colors.buttonColor,
        height: 90, //deviceWidth * 0.2,
        width: 90, // deviceWidth * 0.2,
        borderWidth: 1,
    },
    detailBox: {
        flexDirection: 'column',
        marginLeft: 13,
    },
    username: {
        color: Colors.primery,
        fontWeight: '700',
        fontSize: 20,
        // marginTop: 5
    },
    desig: {
        fontWeight: '400',
        color: '#222222',
        fontSize: 16,
    },
    socialLink: {
        flexDirection: 'row',
        marginTop: 4,
    },
    socialBtn: {
        marginRight: 12,
        padding: 7,
    },
    socialIcon: {
        height: 20,
        width: 20,
    },
})

export default AboutApp
