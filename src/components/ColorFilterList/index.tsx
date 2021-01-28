// @flow
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleColor } from "stores/actions";
import { IState } from "interfaces";
import { colorTypes } from "data/types";
import { FlexRow } from "components/atoms/FlexRow";
import { ColorFilterItem } from "./ColorFilterItem";

const ColorFilterList = () => {
  const dispatch = useDispatch();
  const { selectedColors } = useSelector((state: IState) => state);

  return (
    <FlexRow align="center" padding="1rem 0px">
      {colorTypes.map((color, index) => (
        <ColorFilterItem
          data-testid={color}
          key={index}
          color={color}
          selected={selectedColors.includes(color)}
          onClick={() => dispatch(toggleColor(color))}
        />
      ))}
    </FlexRow>
  );
};

export default ColorFilterList;
