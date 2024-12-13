import { SafeAreaView, TextInput, StyleSheet, Text } from "react-native";
import React, { useState } from 'react';

const MeuInput = (props) => {

    const [value, setValue] = useState(""); // Estado para armazenar o texto digitado no componente.

    const handleValueChange = (text) => {
        setValue(text);
        props.onValueChange(text);
    }

    return (
        <SafeAreaView>
            <Text>{ props.label }</Text>
            <TextInput
                style={style.input}
                placeholder={props.placeholder}
                secureTextEntry={props.comMascara}
                value={value}
                onChangeText={handleValueChange}// é um evento que é disparado toda vez que muda alguma coisa no componente.
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    input: {
        borderWidth:1,
        marginBottom:15,
        marginTop:3,
        padding: 10,
        width: 320,
        borderRadius: 4,
        color: '#1a1a1a',
        fontSize: 18
    }
})

export default MeuInput;