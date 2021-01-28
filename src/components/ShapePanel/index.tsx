// @flow
import React from "react";
import { useSelector } from "react-redux";
import { IState, IShape } from "../../interfaces";
import {
  Title,
  ShapeLayout,
  ShapeItem,
  GeneralShape,
  Triangle,
} from "./shapes";

const ShapePanel = () => {
  const { title, filterShapes } = useSelector((state: IState) => state);

  return (
    <div>
      <Title>{title}</Title>
      <ShapeLayout>
        {filterShapes.map((shape: IShape, index: number) => (
          <ShapeItem key={index}>
            {shape.shape === "triangle" ? (
              <Triangle color={shape.color} />
            ) : (
              <GeneralShape color={shape.color} shape={shape.shape} />
            )}
          </ShapeItem>
        ))}
      </ShapeLayout>
    </div>
  );
};

export default ShapePanel;
