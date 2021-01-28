// @flow
import styled from "styled-components";

export type ShapeFilterItemProps = {
  selected: boolean;
};

export const ShapeFilterItem = styled.div<ShapeFilterItemProps>`
  color: ${(props: any) =>
    props.selected
      ? props.theme.colors.activateColor
      : props.theme.colors.deactivateColor};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-style: italic;
  font-weight: bold; 
  text-transform: uppercase;
  margin-right: 0.8rem;  
  cursor: pointer; 
`;
