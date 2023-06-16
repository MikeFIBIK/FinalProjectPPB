import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput,TouchableOpacity, ImageBackground } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SignIn = () => {
    return (
       <SafeAreaView style={styles.container}>
            <ImageBackground 
                style={styles.Image}
                source={require('../assets/background1.jpg')} >
                <View>
                    <Text style={styles.Title}>Welcome!</Text>
                </View>
                <View style={{flex:1, justifyContent:'flex-end', marginBottom:40}}>
                    <View>
                        <TextInput
                            style={styles.InputText}
                            placeholder='Email Address' />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.InputText}
                            placeholder='Password' />
                    </View>
                        <TouchableOpacity 
                        Title="Sign In"
                        style={styles.SignInButton} >
                        <Text style={styles.TextCenter}>Sign In</Text>
                    </TouchableOpacity>                   
                    <View style={{...styles.ForgetPassword,flexDirection:'row'}}>
                        <Text style={{...styles.Text, color:"white"}}>Forgot Password?</Text>
                        <Text style={{...styles.Text,marginHorizontal:10, color:"green"}}>Contact Admin</Text>
                    </View>
                </View> 
            </ImageBackground>
            
       </SafeAreaView>
    );
}

export default SignIn;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    Title: {
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
        margin:40,
        color: 'white'
    },
    TextCenter: {
        fontSize: 12,
        textAlign:'center',
        fontWeight: 600
    },
        InputText: {
        height: 40,
        marginHorizontal: 40,
        marginVertical:10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        color:'gray',
        backgroundColor: "white"
    },
       SignInButton: {
        height: 40,
        marginHorizontal:"30%",
        marginVertical:10,
        borderRadius: 40,
        borderWidth:1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    ForgetPassword: {
        justifyContent: 'center',
        marginVertical:10
    },
    Background: {
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        height: "100%",
        resizeMode:'cover',
        justifyContent: 'center',
        opacity: 1
    }
})