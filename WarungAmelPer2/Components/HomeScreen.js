import React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={{flex: 1,}}>
        <View style={styles.tes1}>
            <Image source={require('../assets/logo2.png')} style={{width: 256, height: 256}}/>
        </View>
               </View>
    );
}

const styles = StyleSheet.create({
    tes1:{
        flex:5, 
        marginTop:120,
        alignItems:'center',
        justifyContent:'flex-start',
        
    }
})


export default HomeScreen;
