// @flow
import styled from 'styled-components';

export type FlexColPropTypes = {
  margin?: string;
  padding?: string;
};

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props : FlexColPropTypes) => props.margin || "0px"};
  padding: ${(props : FlexColPropTypes) => props.padding || "0px"};
`;