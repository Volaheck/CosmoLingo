import { useState, useEffect } from "react";
import { WordSC } from "./styled";

export interface IWord {
	id: number;
	word: string;
}

export enum GuessStatus {
	NotAttempted,
	Correct,
	Incorrect,
	Selected,
}

interface IProps {
	currentWord: IWord | null;
	firstSelectedWord: IWord | null;
	secondSelectedWord: IWord | null;
	setSelectedWord: (word: IWord | null) => void;
	resetSelected: () => void;
}

const compareWords = (a: IWord | null, b: IWord | null) =>
	a?.id === b?.id && a?.word === b?.word;

export const Word = ({
	firstSelectedWord,
	secondSelectedWord,
	currentWord,
	setSelectedWord,
	resetSelected,
}: IProps) => {
	const [guessStatus, setGuessStatus] = useState<GuessStatus>(
		GuessStatus.NotAttempted
	);

	const isFirstOrSecondSelected =
		firstSelectedWord?.word || secondSelectedWord?.word;
	const isFirstAndSecondSelected =
		firstSelectedWord?.word && secondSelectedWord?.word;
	const isCurrentSelected =
		isFirstOrSecondSelected &&
		(compareWords(firstSelectedWord, currentWord) ||
			compareWords(secondSelectedWord, currentWord));
	const isExistIncorrect =
		isFirstAndSecondSelected && firstSelectedWord.id !== secondSelectedWord.id;
	const isExistCorrect =
		isFirstAndSecondSelected && firstSelectedWord.id === secondSelectedWord.id;

	useEffect(() => {
		if (isCurrentSelected) {
			if (isFirstAndSecondSelected) {
				setGuessStatus(
					firstSelectedWord.id === secondSelectedWord.id
						? GuessStatus.Correct
						: GuessStatus.Incorrect
				);
			} else {
				setGuessStatus(GuessStatus.Selected);
			}
		} else if (guessStatus !== GuessStatus.Correct) {
			setGuessStatus(GuessStatus.NotAttempted);
		}
	}, [
		firstSelectedWord,
		secondSelectedWord,
		guessStatus,
		isCurrentSelected,
		isFirstAndSecondSelected,
	]);

	const handleClick = () => {
		if (isExistIncorrect || isExistCorrect) {
			resetSelected();
		}
		if (guessStatus !== GuessStatus.Correct) {
			setSelectedWord(currentWord);
		}
	};

	return (
		<WordSC guessStatus={guessStatus} onClick={handleClick}>
			{currentWord?.word}
		</WordSC>
	);
};
