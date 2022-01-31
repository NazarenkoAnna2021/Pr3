import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { CounterButton } from '../counterButton';

interface IProps {
    counter: number;
    minusNamber: () => void;
    addNumber: () => void;
}

export const CountArea:FC<IProps> = ({ counter, minusNamber, addNumber }) => {
    return (
        <View style={styles.countArea}>
            <CounterButton title={'❮'} pressFunction={minusNamber} />
            <Text style={styles.output}>{counter}</Text>
            <CounterButton title={'❯'} pressFunction={addNumber} />
        </View>
    );
}