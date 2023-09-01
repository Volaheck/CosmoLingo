import { useEffect, useState } from "react";
import { useWords } from "./hooks/use-words";
import { Word, IWord } from "./word";
import { Wrapper, Container, H1, H2 } from "./styled";

export const Words = () => {
	const { words } = useWords();
	const [firstSelectedWord, setFirstSelectedWord] = useState<null | IWord>(
		null
	);
	const [secondSelectedWord, setSecondSelectedWord] = useState<null | IWord>(
		null
	);

	function resetSelectedWord() {
		setFirstSelectedWord(null);
		setSecondSelectedWord(null);
	}

	useEffect(() => {
		// TODO: 
		// spliceWords(6);
		// Извлекаем короткий подмассив
		// Разбиваем подмассив слов на два массива слов.
		// Мешаем подмассивы.
		// При клике выбираем слово.
		// Добавить этот движ в управление словами через хук или касс, так, чтобы обновление слов вызывало перерендер
		// Вынести в отдельный хук управление словами
	}, []);
	return (
		<>
			<H1>Words</H1>
			<H2>Нажмите на пары слов</H2>
			<Wrapper>
				<Container>
					{words.slice(0, 6).map((el, i) => {
						return (
							<Word
								key={el.key}
								firstSelectedWord={firstSelectedWord}
								secondSelectedWord={secondSelectedWord}
								currentWord={{ id: el.key, word: el.ru }}
								setSelectedWord={setFirstSelectedWord}
								resetSelected={resetSelectedWord}
							/>
						);
					})}
				</Container>
				<Container>
					{words.slice(0, 6).map((el, i) => {
						return (
							<Word
								key={el.key}
								firstSelectedWord={firstSelectedWord}
								secondSelectedWord={secondSelectedWord}
								currentWord={{ id: el.key, word: el.en }}
								setSelectedWord={setSecondSelectedWord}
								resetSelected={resetSelectedWord}
							/>
						);
					})}
				</Container>
			</Wrapper>
		</>
	);
};
