import { Wrapper, Container, Word, H1, H2 } from "./styled";
import { useWords } from "./hooks/use-words";
import { useEffect } from "react";

export const Words = () => {
	const { words } = useWords();
	useEffect(() => {
		// spliceWords(6);
    // Вынести в отдельный хук управление словами
	}, []);

	return (
		<>
			<H1>Words</H1>
			<H2>Нажмите на пары слов</H2>
			<Wrapper>
				<Container>
					{words.slice(0, 6).map((el, i) => {
						return <Word key={i}>{el.ru}</Word>;
					})}
				</Container>
				<Container>
					{words.slice(0, 6).map((el, i) => {
						return <Word key={i}>{el.en}</Word>;
					})}
				</Container>
			</Wrapper>
		</>
	);
};
