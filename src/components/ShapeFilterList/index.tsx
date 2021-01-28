// @flow
import React from "react";
import { FlexRow } from "components/atoms/FlexRow";
import { ShapeFilterItem } from "./ShapeFilterItem";
import { useSelector, useDispatch } from "react-redux";
import { toggleShape } from "stores/actions";
import { IState } from "interfaces";
import { shapeTypes } from "data/types";

const ShapeFilterList = () => {
  const dispatch = useDispatch();
  const { selectedShapes } = useSelector((state: IState) => state);

  return (
    <FlexRow align="center" padding="1rem 0px">
      {shapeTypes.map((shape, index) => (
        <ShapeFilterItem
          key={index}
          selected={selectedShapes.includes(shape)}
          onClick={() => dispatch(toggleShape(shape))}
        >
          {shape}
        </ShapeFilterItem>
      ))}
    </FlexRow>
  );
};

export default ShapeFilterList;
