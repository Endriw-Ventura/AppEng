// configura o estilo padrão dos botões.

import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function FlatButton({ text, onPress, style }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, style]}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 3,
        width: '100%',
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'grey',
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },
});