import React from 'react';
import { View, TextInput } from 'react-native';
import { CountArea } from '../countArea';
import { InputStap } from '../inputStap';
import { Massage } from '../massage';

import { styles } from './styles';

export class CounterContainer extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0,
            number: 1
        };
    }

    componentDidUpdate = (prevState) => {
        if ((+this.state.counter % 5) === 0 && this.state.number === prevState.number) {
            if (this.state.counter > prevState.counter) {
                this.setState({ number: +this.state.number + 1 });
            } else {
                if (this.state.number > 1) {
                    this.setState({ number: +this.state.number - 1 });
                }
            }
        }
    }

    onChangeInputValue = (text: string) => {
        this.setState({ number: text });
    }

    addNumber = (): void => {
        if (this.state.counter < 20) {
            this.setState({ counter: this.state.counter + +this.state.number });
        }
    }

    minusNamber = (): void => {
        if (this.state.counter > -20) {
            this.setState({ counter: this.state.counter - +this.state.number });
        }
    }

    render = (): React.ReactNode => {
        return (
            <View style={styles.mainArea}>
                {(!this.state.number || this.state.number === '0' || isNaN(this.state.number) || Number(this.state.number) < -20 || Number(this.state.number) > 20) && <Massage inputValue={this.onChangeInputValue} />}
                <CountArea counter={this.state.counter} addNumber={this.addNumber} minusNamber={this.minusNamber} />
                <InputStap value={this.state.number} onChangeText={this.onChangeInputValue} />
            </View>
        );
    }
};
