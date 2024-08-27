import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const AsbProjectTwo = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>RN Social App</Text>

            <View style={styles.inputWrapper}>
                <View style={styles.line}>
                <AntDesign name="user" size={20} color="#ccc" style={styles.icon} />
                </View>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#666"
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputWrapper}>
            <View style={styles.line}>
                <Fontisto name="locked" size={20} color="#ccc" style={styles.icon} />
                </View>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#666"
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookButton}>
                <FontAwesome name="facebook-f" size={20} color="#3b5998" style={styles.socialIcon} />
                <Text style={styles.facebookText}>Sign In with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
                <AntDesign name="google" size={20} color="#db4a39" style={styles.socialIcon} />
                <Text style={styles.googleText}>Sign In with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.createAccount}>Don't have an account? Create here</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        paddingVertical: 30,
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: 30,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#030267',
        fontStyle: 'italic',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        color: '#000',
        fontSize: 16,
    },
    
    signInButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 10,
    },
    signInText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    forgotPassword: {
        color: '#007bff',
        marginBottom: 15,
        paddingVertical:20,
        fontSize: 16,
        fontWeight:'bold',
        textAlign: 'center',
    },
    facebookButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#d0efff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    googleButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffcbd1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'row',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    socialIcon: {
        position: 'absolute',
        left: 20,
    },
    facebookText: {
        color: '#3b5998',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        flex: 1,
    },
    googleText: {
        color: '#db4a39',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        flex: 1,
    },
    createAccount: {
        color: '#007bff',
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 16,
        paddingVertical:20,
        fontWeight:'bold',
    },
});

export default AsbProjectTwo;
