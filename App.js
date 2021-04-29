import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

import {
    Text, View, SafeAreaView,
    StyleSheet, Button, TextInput
} from "react-native"


export default props => {

    const [state, setstate] = useState("")
    const [valueCep, setCep] = useState({})

    async function Cep(cep) {
        try {
            return await axios(`https://viacep.com.br/ws/${cep}/json/`)
                .then(resp => setCep(resp.data))
        } catch (e) {
            return e
        }

    }


    useEffect(() => {
        Cep()
    }, [])



    return (
        <SafeAreaView style={estilo.container}>


            <View style={estilo.container}>

                <Text>DIGITE SEU CEP {"\n"}</Text>

                <View style={estilo.input}>
                    <TextInput style={estilo.input} onChangeText={text => setstate(text)} />

                </View>

                <View style={estilo.ContainerValues}>

                    <Text>CEP: {valueCep.cep} {"\n"}</Text>
                    <Text>logradouro: {valueCep.logradouro}{"\n"}</Text>
                    <Text>Complemento: {valueCep.complemento}{"\n"}</Text>
                    <Text>localidade: {valueCep.localidade}{"\n"}</Text>
                    <Text>UF: {valueCep.uf}{"\n"}</Text>
                    <Text>IBGE: {valueCep.ibge}{"\n"}</Text>
                    <Text>GIA: {valueCep.gia}{"\n"}</Text>
                    <Text>DDD: {valueCep.ddd}{"\n"}</Text>
                    <Text>SIAFI: {valueCep.siafi}</Text>

                    <Button title="Buscar CEP" onPress={() => Cep(state)} />

                </View>

            </View>
        </SafeAreaView>
    )

}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        borderWidth: 1,
        borderColor: "#4B0082",
        alignItems: "center",
        justifyContent: "space-around",
        alignContent: "space-around",

    },
    input: {
        flex: 0.30,
        width: "90%",
        borderWidth: 1,
        borderColor: "#4B0082",
        alignItems: "center",
        textAlign: "center"
    },
    ContainerValues: {
        flex: 1,
        height: 400,
        width: "100%",
        borderWidth: 1,
        justifyContent: "space-around",
        borderColor: "#4B0082",
    }
})
