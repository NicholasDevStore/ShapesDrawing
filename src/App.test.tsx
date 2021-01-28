import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { shapeTypes, colorTypes } from "data/types";

test("renders the correct header title", () => {
  const { getByText } = render(<App />);
  getByText("SHAPES");  
});

test("All the filters should be selected by default", () => {
  const { getByText, getByTestId } = render(<App />);
  shapeTypes.forEach((shape) => {
    expect(getByText(shape).selected).toBe(true);
  });
  colorTypes.forEach((color) => {
    expect(getByTestId(color).selected).toBe(true);
  });
  getByText("all items:");
});

test("ShapeFilterItem updates its selected property", () => {
  const { getByText } = render(<App />);
  const rectangleFilterItem = getByText("rectangle");
  fireEvent.click(rectangleFilterItem);
  expect(rectangleFilterItem.selected).toBe(false);
  fireEvent.click(rectangleFilterItem);
  expect(rectangleFilterItem.selected).toBe(true);
});

test("ColorFilterItem updates its selected property", () => {
  const { getByTestId } = render(<App />);
  const redFilterItem = getByTestId("red");
  fireEvent.click(redFilterItem);
  expect(redFilterItem.selected).toBe(false);
  fireEvent.click(redFilterItem);
  expect(redFilterItem.selected).toBe(true);
});

test("Only selecting Rectangle shape generates 'multiple rectangle items:' label and then deselecting rectangle will generate 'all items:'", () => {
  const { getByText } = render(<App />);
  shapeTypes
    .filter((shape) => shape !== "rectangle")
    .map((shape) => {
      fireEvent.click(getByText(shape));
    });
  getByText("all rectangle items:");
  fireEvent.click(getByText("rectangle"));
  getByText("all items:");
});

test("Only selecting red color generates 'multiple red items:' label and then deselecting rectangle will generate 'all items:'", () => {
  const { getByText, getByTestId } = render(<App />);
  colorTypes
    .filter((color) => color !== "red")
    .map((color) => {
      fireEvent.click(getByTestId(color));
    });
  getByText("all red items:");
  fireEvent.click(getByTestId("red"));
  getByText("all items:");
});
