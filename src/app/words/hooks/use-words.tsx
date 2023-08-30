import { useEffect, useState } from "react";
import { shuffle } from "../../../utils/shuffle";

export interface IWord {
	ru: string;
	en: string;
	key: number;
}

interface IFetcherData {
	majorDimension: string;
	range: string;
	values: string[][];
	error?: {
		message: string;
	};
}

export const useWords = () => {
	const [loading, setLoading] = useState(true);
	const [words, setWords] = useState<IWord[]>([]);
	const API_KEY = process.env.REACT_APP_API_KEY;
	const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;

	const fetchGoogleSheetData = async (range: string): Promise<IFetcherData> => {
		const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`;
		try {
			const response = await fetch(url);
			const data: IFetcherData = await response.json();
			if (response.ok) {
				return data;
			} else {
				throw new Error(`Ошибка: ${data.error?.message}`);
			}
		} catch (error) {
			throw new Error(`Ошибка при выполнении запроса: " ${error}`);
		}
	};

	function translator(data: IFetcherData["values"]): IWord[] {
		return data
			.map((el, i) => {
				return {
					ru: el[2] || el[1],
					en: el[0],
					key: i,
				};
			})
			.filter((el) => !!el.ru && !!el.en);
	}

	useEffect(() => {
		async function getWords() {
			const RANGE = "Words!A3:C1000";
			const data = await fetchGoogleSheetData(RANGE);
			const translatedWords = translator(shuffle(data.values));
			setWords(translatedWords);
			setLoading(false);
		}
		getWords();
	}, []);

	return { loading, words };
};
