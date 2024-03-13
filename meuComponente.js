import React from 'react';
import { Text, StyleSheet } from 'react-native'


export function MeuComponente() {
    return (
        <Text style={{color: '#fff'}}> O comeponente </Text>
    );
};

export const somar = (x,y) => x+y;