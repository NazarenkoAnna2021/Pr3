import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { CountArea } from '../countArea';
import { InputStap } from '../inputStep';
import { Massage } from '../massage';
import { styles } from './styles';

export const CounterContainer: FC = () => {
    const [counter, setCounter] = useState<number>(0);
    const [step, setStep] = useState<string | number>('1');

    useEffect(() => {
        setStep((prevStep) => {
            if ((counter % 5) === 0 && step === prevStep) {
                if
                    return Number(step) + 1;
            }
        })
    }, [counter]);

    const onChangeInputValue = (text: string): void => {
        setStep(text);
    }

    const addNumber = (): void => {
        if (counter < 20) {
            setCounter(counter + Number(step));
        }
    }

    const minusNamber = (): void => {
        if (counter > -20) {
            setCounter(counter - Number(step));
        }
    }

    const drawMassag = () => {
        if (!step || step === '0' || isNaN(Number(step)) || Number(step) < -20 || Number(step) > 20) {
            return (<Massage setInputValue={onChangeInputValue} />);
        }
    }

    return (
        <View style={styles.mainArea}>
            {drawMassag()}
            <CountArea counter={counter} addNumber={addNumber} minusNamber={minusNamber} />
            <InputStap value={step} changeText={onChangeInputValue} />
        </View>
    );
}