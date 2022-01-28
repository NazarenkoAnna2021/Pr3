import React from 'react';
import { View, TextInput } from 'react-native';
import { CountArea } from '../countArea';

import { styles } from './styles';

export class InputStap extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render = (): React.ReactNode => {
        return (
            <TextInput
                style={styles.numberInput}
                placeholder="Step"
                value={String(this.props.value) } 
                keyboardType="numeric"
                onChangeText={this.props.onChangeText}
            />
        )
    }
};