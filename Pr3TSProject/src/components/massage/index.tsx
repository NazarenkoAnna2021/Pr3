import React, { FC } from 'react';
import {
    Text,
    View
} from 'react-native';
import { styles } from './styles';

export class Massage extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            time: 10
        }
        console.log(props);
        this.timerId = React.createRef();
    }

    componentDidMount = () => {
        this.timerId.current = setInterval(() =>
            this.setState((prevState) => {
                if (prevState.time > 0) return { time: prevState.time - 1 };
                this.props.inputValue(1);
                return 0;
            }
            ), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId.current);
    }

    render = (): React.ReactNode => {
        return (
            <View style={styles.conteiner}>
                <Text>
                    Enter not null number, or step will become to 1 in {this.state.time} minutes
                </Text>
            </View>
        );
    }
}