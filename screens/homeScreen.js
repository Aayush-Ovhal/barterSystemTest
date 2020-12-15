import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Modal, KeyboardAvoidingView} from 'react-native';

import firebase from 'firebase';
import db from '../config';
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    Home
                </Text>
            </View>
        )
    }
}