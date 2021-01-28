// @flow
import styled from 'styled-components';

export const Header = styled.div`
  background-color: ${props => props.theme.colors.headerBgColor};
  color: ${props => props.theme.colors.headerFgColor};
  font-size: ${props => props.theme.fontSizes.medium};
  height: ${props => props.theme.header.height};
  display: flex;
  align-items: center;
  padding-left: 2rem;
  font-weight: bold;
`;