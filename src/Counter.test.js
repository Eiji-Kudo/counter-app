import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

// 初期状態のテスト
test("renders the counter with initial count of 0", () => {
  render(<Counter />);
  expect(screen.getByText("0")).toBeInTheDocument();
});

// インクリメントのテスト
test("increments count by 1 when increment button is clicked", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByText("1")).toBeInTheDocument();
});

// デクリメントのテスト
test("decrements count by 1 when decrement button is clicked", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByText("-1")).toBeInTheDocument();
});

// リセットのテスト
test("resets count to 0 when reset button is clicked", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment")); // Increment to 1
  fireEvent.click(screen.getByText("Reset"));
  expect(screen.getByText("0")).toBeInTheDocument();
});

// 連続クリックのテスト
test("increments and decrements count correctly with multiple clicks", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment"));
  fireEvent.click(screen.getByText("Increment"));
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByText("1")).toBeInTheDocument();
});

// カウントの最小値のテスト（例えば最小値を -5 とします）
test("does not decrement below minimum count limit", () => {
  render(<Counter />);
  for (let i = 0; i < 10; i++) {
    fireEvent.click(screen.getByText("Decrement"));
  }
  expect(screen.getByText("-5")).toBeInTheDocument(); // 最小値を -5 に設定する場合
});

// カウントの最大値のテスト（例えば最大値を 5 とします）
test("does not increment above maximum count limit", () => {
  render(<Counter />);
  for (let i = 0; i < 10; i++) {
    fireEvent.click(screen.getByText("Increment"));
  }
  expect(screen.getByText("5")).toBeInTheDocument(); // 最大値を 5 に設定する場合
});
