import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput,TouchableOpacity, ImageBackground } from 'react-native';

const SignUp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.Image}
                source={require('../assets/LogoKampungLauk.jpeg')} >
                <View>
                    <Text style={styles.Title}>Sign Up</Text>
                </View>
                <View style={{flex:1, justifyContent:'flex-end', marginBottom:40}}>
                    <View>
                        <TextInput
                            style={styles.InputText}
                            placeholder='Email Address' />
                        <TextInput
                            style={styles.InputText}
                            keyboardType='numeric'
                            placeholder='Phone Number' />    
                        <TextInput
                            secureTextEntry={true}
                            style={styles.InputText}
                            placeholder='Password' />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.InputText}
                            placeholder='Confirm Password' />
                    </View>
                    <View style={{marginHorizontal: 40}}>
                        <Text style={styles.Text}>Forgot password?</Text>
                    </View>
                    <TouchableOpacity 
                        Title="Sign In"
                        style={styles.SignInButton} >
                        <Text style={styles.TextCenter}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row', justifyContent: 'center'}}>
                        <View style={styles.Line}></View>
                        <Text style={{...styles.Text,justifyContent:'center'}}>Or</Text>
                        <View style={styles.Line}></View>
                    </View>
                    
                    <View style={{...styles.SignUpButton,flexDirection:'row'}}>
                        <Text style={styles.Text}>Already have an account?</Text>
                        <Text style={{...styles.Text,marginHorizontal:10, color:"green"}}>Sign In</Text>
                    </View>
                </View>
            </ImageBackground>
           
       </SafeAreaView>
    );
}

export default SignUp;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        opacity: 1
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
    Text: {
        fontSize: 12,
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
        backgroundColor: 'white'
    },
    Line: {
        width:"40%",
        borderWidth: 2,
        margin:10,
        borderRadius:2,
        borderColor: 'black'
    },
    SignInButton: {
        height: 40,
        marginHorizontal:"30%",
        marginVertical:10,
        borderRadius: 40,
        borderWidth:1,
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    SignUpButton: {
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
    },
    logo: {
        height: 10
    }
})