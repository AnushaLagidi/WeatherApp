import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Model = ({ current, timezone }) => {
    return (
        <View>
            <Text>{current}</Text>
        </View>
    )
}

export default Model

const styles = StyleSheet.create({})