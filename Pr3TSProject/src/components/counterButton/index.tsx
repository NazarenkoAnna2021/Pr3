import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface IProps {
  title: string;
  pressFunction: () => void;
}

export const CounterButton:FC<IProps> = ({ title, pressFunction }) => {
  return (
    <TouchableOpacity onPress={pressFunction} style={styles.countBtn}>
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}