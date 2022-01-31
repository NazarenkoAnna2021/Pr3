import React, { FC, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { CountArea } from '../countArea';
import { InputStap } from '../inputStep';
import { Massage } from '../massage';
import { styles } from './styles';

export const CounterContainer: FC = () => {
    const [counter, setCounter] = useState<number>(0);
    const [step, setStep] = useState<string | number>('1');
    const prevCounter = useRef(0);

    useEffect(() => {
        if ((counter % 5) === 0) {
            setStep((prevStep) => {
                if (step === prevStep) {
                    if (counter > prevCounter.current) {
                        return Number(step) + 1;
                    } else {
                        if (step > 1) {
                            return Number(step) - 1;
                        }
                    }
                }
                return step;
            })
        }

    }, [counter]);

    const onChangeInputValue = (text: string): void => {
        setStep(text);
    }

    const addNumber = (): void => {
        if (counter < 20 || counter + Number(step) < 20) {
            setCounter(counter + Number(step));
        }
    }

    const minusNamber = (): void => {
        if (counter > -20) {
            setCounter(counter - Number(step));
        }
    }

    const isdrawMassag = ():boolean => {
        if (!step || step === '0' || isNaN(Number(step)) || Number(step) < -20 || Number(step) > 20) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <View style={styles.mainArea}>
            {isdrawMassag() ?? <Massage setInputValue={onChangeInputValue} />}
            <CountArea counter={counter} addNumber={addNumber} minusNamber={minusNamber} />
            <InputStap value={step} changeText={onChangeInputValue} />
        </View>
    );
}