import { useEffect, useState } from 'react'
import { getResult, options } from '../utils/utils';

export function useChoices() {
    const [userChoice, setUserChoice] = useState(-1);
    const [computerChoice, setComputerChoice] = useState(-1);
    const [userMessage, setUserMessage] = useState('');
    const [computerMessage, setComputerMessage] = useState('');
    const [result, setResult] = useState(-1);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (userChoice !== null) {
            setUserMessage(
                `Has elegido ${options[userChoice]?.emoji} - ${options[userChoice]?.name}`
            );
        }
    }, [userChoice]);

    useEffect(() => {
        if (computerChoice !== null) {
            setComputerMessage(
                `El ordenador ha elegido ${options[computerChoice]?.emoji} - ${options[computerChoice]?.name}`
            );
        }
    }, [computerChoice]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePlay = (choice:number) => {
        setUserChoice(choice);
        setDisabled(true);
        const randomChoice = Math.floor(Math.random() * 3);

        setTimeout(() => {
            setComputerChoice(randomChoice);
        }, 1500);

        setTimeout(() => {
            const result = getResult(choice, randomChoice)
            setResult(result);
        }, 3000);

        clearTimeout(undefined);
    };

    const reset = () => {
        setUserChoice(-1);
        setComputerChoice(-1);
        setUserMessage('');
        setComputerMessage('');
        setResult(-1);
        setDisabled(false);
    };

    return {
        userChoice,
        computerChoice,
        userMessage,
        computerMessage,
        result,
        disabled,
        handlePlay,
        reset,
    };
}
