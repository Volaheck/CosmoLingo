import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 30px;
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 30px;
`;

export const Container = styled.div`
  display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Word = styled.div`
	width: 150px;
	height: 50px;
	box-sizing: border-box;
	padding: 10px;
	border: 1px solid gray;
	border-radius: 6px;
	user-select: none;
	color: gray;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	transition: opacity 2s;
	cursor: pointer;
`;

export const H1 = styled.h2`
  text-align: center;
`;

export const H2 = styled.h2`
  text-align: center;
`;