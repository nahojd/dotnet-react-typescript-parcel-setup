import * as React from "react";
import { render } from "react-dom";

export const App = () => {
	return <h1>Hello, world!</h1>;
};

const app = document.getElementById("app-container");
render(<App />, app);