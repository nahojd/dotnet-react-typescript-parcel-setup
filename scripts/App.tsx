import * as React from "react";
import { render } from "react-dom";

export const App = () => {
	const message = "Hello, world!";

	return <h1>{message}</h1>;
};

const app = document.getElementById("app-container");
render(<App />, app);