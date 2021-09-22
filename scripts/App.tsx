import * as React from "react";
import { render } from "react-dom";
import { getMessage } from "./Message";

export const App = () => {
	const message = getMessage();

	return <h1>{message}</h1>;
};

const app = document.getElementById("app-container");
render(<App />, app);