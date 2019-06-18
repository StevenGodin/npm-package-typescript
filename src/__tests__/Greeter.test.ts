import { Greeter } from "../index";

test("Greeter greets", () => {
  expect(Greeter("Steve")).toBe("Hello Steve");
});
