// @flow
import styled from "styled-components";

export interface IShapeProps {
  shape: string;
  color: string;
}

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.titleColor};
  text-transform: uppercase;
  font-style: italic;
  font-weight: bold;
  padding: 4rem 0px;
  margin: 0px;
`;

export const ShapeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ShapeItem = styled.div`
  position: relative;
  margin: 1rem;
  padding-top: calc(100% - 1.5rem);
  border: ${(props) => "2px solid " + props.theme.colors.borderColor};
  border-radius: 6px;
  &:nth-child(4n+1) {
    margin-left: 0px;
  }
  &:nth-child(4n) {
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    &:nth-child(4n+3) {
      margin-left: 0px;
    }
    &:nth-child(4n+2) {
      margin-right: 0px;
    }
  }  
`;

export const GeneralShape = styled.div`
  background: ${(props) => props.color};
  width: ${(props: IShapeProps) =>
    props.shape === "square" || props.shape === "round" ? "60%" : "70%"};
  height: ${(props) =>
    props.shape === "square" || props.shape === "round" ? "60%" : "50%"};  
  border: none;
  border-radius: ${(props) =>
    props.shape === "round" || props.shape === "oval" ? "50%" : "0%"};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Triangle = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    height: 0;
    width: 0;
    display: block;
    border-top: none;
    border-left: 6em solid transparent;
    border-right: 6em solid transparent;
    border-bottom: 10em solid ${(props) => props.color};
    background-size: cover;
  }
`;
