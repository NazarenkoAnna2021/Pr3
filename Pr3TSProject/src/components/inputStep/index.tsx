import React, { FC } from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

interface IProps {
    value: string | number;
    changeText: (text: string) => void;
}

export const InputStap: FC<IProps> = ({ value, changeText }) => {
    return (
        <TextInput
            style={styles.numberInput}
            placeholder="Step"
            value={String(value)}
            keyboardType="numeric"
            onChangeText={changeText}
        />
    )
}