import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

const Splash = () => {
    return (
        <View style={{flex: 1,}}>
            <View style={styles.tes1}>
                <Image source={require('../assets/logo1.png')} style={{width: 256, height: 256}}/>
            </View>
            <View style={styles.tes2}>
                <TouchableOpacity style={{width: 128, height: 32, borderWidth:1, backgroundColor: 'grey', padding: 6}}>
                    <Text style={{textAlign:'center', color: 'white'}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tes1:{
        flex:5,
        alignItems:'center',
        justifyContent:'center',
        
    },
    tes2:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       
    }
})

export default Splash;
