import { getMessage } from "./Message";

describe("getMessage", () => {
	it("should return Hello, world!", () => {
		const result = getMessage();

		expect(result).toEqual("Hello, world!");
	});
});