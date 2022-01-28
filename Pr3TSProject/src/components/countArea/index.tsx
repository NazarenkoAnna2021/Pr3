import React, { FC } from 'react';
import {
    Text,
    View
} from 'react-native';
import { styles } from './styles';
import { CounterButton } from '../counterButton';

export class CountArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render = (): React.ReactNode => {
        return (
            <View style={styles.countArea}>
                <CounterButton title={'❮'} pressFunction={this.props.minusNamber} />
                <Text style={styles.output}>{this.props.counter}</Text>
                <CounterButton title={'❯'} pressFunction={this.props.addNumber} />
            </View>
        );
    }
}