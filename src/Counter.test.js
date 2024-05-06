import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders the counter component with initial count", () => {
  render(<Counter />);
  const countElement = screen.getByText("0");
  expect(countElement).toBeInTheDocument();
});

test("increments count by 1 when increment button is clicked", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  const countElement = screen.getByText("1");
  expect(countElement).toBeInTheDocument();
});

test("decrements count by 1 when decrement button is clicked", () => {
  render(<Counter />);
  const decrementButton = screen.getByText("Decrement");
  fireEvent.click(decrementButton);
  const countElement = screen.getByText("-1");
  expect(countElement).toBeInTheDocument();
});

test("resets count to 0 when reset button is clicked", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton); // 1回インクリメントして1にする
  const resetButton = screen.getByText("Reset");
  fireEvent.click(resetButton); // リセットボタンをクリック
  const countElement = screen.getByText("0"); // カウントが0にリセットされているか確認
  expect(countElement).toBeInTheDocument();
});
