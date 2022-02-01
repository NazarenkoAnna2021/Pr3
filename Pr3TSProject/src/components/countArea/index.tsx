import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { CounterButton } from '../counterButton';

interface IProps {
    counter: number;
    minusNumber: () => void;
    addNumber: () => void;
}

export const CountArea:FC<IProps> = ({ counter, minusNumber, addNumber }) => {
    return (
        <View style={styles.countArea}>
            <CounterButton title={'❮'} onPress={minusNumber} />
            <Text style={styles.output}>{counter}</Text>
            <CounterButton title={'❯'} onPress={addNumber} />
        </View>
    );
}