// @flow
import styled from "styled-components";

export type FlexRowPropTypes = {
  justify?: string;
  align?: string;
  width?: string;
  margin?: string;
  padding?: string;
  wrap?: string;
};

export const FlexRow = styled.div`
  display: flex;
  justify-content: ${(props: FlexRowPropTypes) => props.justify || "initial"};
  align-items: ${(props: FlexRowPropTypes) => props.align || "initial"};
  width: ${(props: FlexRowPropTypes) => props.width || "initial"};
  margin: ${(props: FlexRowPropTypes) => props.margin || "0px"};
  padding: ${(props: FlexRowPropTypes) => props.padding || "0px"};
  flex-wrap: ${(props: FlexRowPropTypes) => props.wrap || "initial"};
`;
