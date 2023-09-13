import { Option } from "../models/options.model";

export const options: Option[] = [
    { id: 0, name: "Piedra", emoji: "🪨", beats: [2] },
    { id: 1, name: "Papel",  emoji: "📄", beats: [0] },
    { id: 2, name: "Tijera", emoji: "✂️", beats: [1] },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getResult = (userChoice: number, computerChoice: number):number => {
    if (userChoice === computerChoice) {
        return 0;
    }

    if (options[userChoice].beats.includes(computerChoice)) {
        return 1;
    }

    return 2;
};

