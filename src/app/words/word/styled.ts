import styled from "styled-components";
import { GuessStatus } from "./index";

interface IWordSC {
	guessStatus: GuessStatus;
}

export const WordSC = styled.div<IWordSC>`
	width: 150px;
	height: 50px;
	box-sizing: border-box;
	padding: 10px;
	border: 1px solid gray;
	border-radius: 6px;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	transition: opacity 2s;
	cursor: pointer;
  color: ${({ guessStatus: guessStatis }: IWordSC) => {
		if (guessStatis === GuessStatus.NotAttempted) {
			return "gray";
		}else if(guessStatis === GuessStatus.Correct){
      return "green";
    }else if(guessStatis === GuessStatus.Incorrect){
      return "red";
    }else if(guessStatis === GuessStatus.Selected){
      return "yellow";
    }
	}}
`;
