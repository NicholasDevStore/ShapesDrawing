// @flow
import * as actionTypes from "./actionTypes";
import { shapeTypes, colorTypes } from "data/types";
import allShapes from "data/shapes.json";
import { IState, IAction } from "interfaces";

const initalStates = {
  title: "all items:",
  filterShapes: [...allShapes],
  selectedShapes: shapeTypes,
  selectedColors: colorTypes,
};

const getFilteredShapes = (shapes: string[], colors: string[]) => {
  const filteredShapes = allShapes.filter(
    (shape) => shapes.includes(shape.shape) && colors.includes(shape.color)
  );
  return filteredShapes;
};

const getTitle = (shapes: string[], colors: string[]) => {
  const shapeAllCount = shapeTypes.length;
  const colorAllCount = colorTypes.length;
  const selectedShapeCount = shapes.length;
  const selectedColorCount = colors.length;

  if (
    selectedShapeCount === shapeAllCount &&
    selectedColorCount === colorAllCount
  ) {
    return "all items:";
  }
  if (selectedColorCount >= 2 && selectedShapeCount >= 2) {
    return "multiple items:";
  }
  if (selectedShapeCount === shapeAllCount && selectedColorCount === 1) {
    return `all ${colors[0]} items:`;
  }
  if (selectedColorCount === colorAllCount && selectedShapeCount === 1) {
    return `all ${shapes[0]} items:`;
  }
  if (selectedShapeCount >= 2 && selectedColorCount === 1) {
    return `multiple ${colors[0]} items:`;
  }
  if (selectedColorCount >= 2 && selectedShapeCount === 1) {
    return `multiple ${shapes[0]} items:`;
  }
  if (selectedColorCount === 1 && selectedShapeCount === 1) {
    return `${shapes[0]} ${colors[0]} items:`;
  }
  return "all items:";
};

const reducer = (state: IState = initalStates, action: IAction) => {
  const { selectedColors, selectedShapes } = state;
  const { payload, type } = action;

  switch (type) {
    case actionTypes.TOGGLE_COLOR:
      let updatedSelectedColors = selectedColors.includes(payload)
        ? selectedColors.filter((item) => item !== payload)
        : [...selectedColors, payload];
      if (updatedSelectedColors.length === 0) {
        updatedSelectedColors = colorTypes;
      }
      return {
        ...state,
        title: getTitle(selectedShapes, updatedSelectedColors),
        filterShapes: getFilteredShapes(selectedShapes, updatedSelectedColors),
        selectedColors: updatedSelectedColors,
      };

    case actionTypes.TOGGLE_SHAPE:
      let updatedSelectedShapes = selectedShapes.includes(payload)
        ? selectedShapes.filter((item) => item !== payload)
        : [...selectedShapes, payload];
      if (updatedSelectedShapes.length === 0) {
        updatedSelectedShapes = shapeTypes;
      }
      return {
        ...state,
        title: getTitle(updatedSelectedShapes, selectedColors),
        filterShapes: getFilteredShapes(updatedSelectedShapes, selectedColors),
        selectedShapes: updatedSelectedShapes,
      };

    default:
      return state;
  }
};

export default reducer;
