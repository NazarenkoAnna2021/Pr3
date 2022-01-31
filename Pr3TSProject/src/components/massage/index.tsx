import React, { useEffect, useRef, useState, FC } from 'react';
import { Text, View } from 'react-native';

interface IProps {
    setInputValue: (value: string) => void;
}

export const Massage: FC<IProps> = ({ setInputValue }) => {
    const [time, setTime] = useState<number>(10);
    const timerId = useRef<number>(10);

    useEffect(() => {
        timerId.current = setInterval(() =>
            setTime((prevTime) => {
                if (prevTime === 0) {
                    setInputValue('1');
                }
                return prevTime - 1;
            }), 1000);

        return () => clearInterval(timerId.current);
    }, []);

    return (
        <View>
            <Text>
                Enter not null number, or step will become to 1 in {time} seconds
            </Text>
        </View>
    );
}