// @flow
import styled from "styled-components";

export type ColorFilterItemProps = {
  selected: boolean;
  color: string;
};

export const ColorFilterItem = styled.div<ColorFilterItemProps>`
  width: ${(props) => props.theme.fontSizes.small};
  height: ${(props) => props.theme.fontSizes.small};
  background: ${(props) => props.color};
  cursor: pointer;
  margin-right: 1rem;
  border: ${(props) =>
    "3px solid " +
    (props.selected ? props.theme.colors.colorFilterBorder : props.color)};
`;
