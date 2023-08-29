import { Routes } from "react-router";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Table } from "./table";
import { Words } from "./words";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
		margin: 0;
		background-color: black;
		color: gray;
		font-family: Geneva, Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
export const App = () => {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Routes>
					<Route path="/table" element={<Table />} />
					<Route path="/" element={<Words />} />
				</Routes>
			</Router>
		</>
	);
};
