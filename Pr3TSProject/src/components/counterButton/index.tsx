import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface IProps {
  title: string;
  onPress: () => void;
}

export const CounterButton:FC<IProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.countBtn} >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}