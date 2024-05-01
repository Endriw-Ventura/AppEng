import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function CustomTextInput({ value, onChangeText, placeholder, inputStyle, containerStyle }) {
    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={[styles.input, inputStyle]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        // Estilos para o container
    },
    input: {
        borderRadius: 3,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'grey',
        color: 'white',
        // Estilos para o texto em si
    },
});