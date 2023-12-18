import { Validator } from "../Validation/validation.js";

test("correctUserName", () => {
  const character = new Validator();
  expect(character.validateUsername("h_theBest-01A")).toBeTruthy();
});

test("allowedCharacters", () => {
  const character = new Validator();
  expect(character.validateUsername("=")).toBeFalsy();
});

test("notStartWithNumbersOrSymbols", () => {
  const character = new Validator();
  expect(character.validateUsername("0dFg")).toBeFalsy();
});

test("notEndWithNumbersOrSymbols", () => {
  const character = new Validator();
  expect(character.validateUsername("dFg-")).toBeFalsy();
});

test("noMoreThanThreeDigitsInRow", () => {
  const character = new Validator();
  expect(character.validateUsername("dFg4445")).toBeFalsy();
});
