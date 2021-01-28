export interface IShape {
  id: number;
  shape: string;
  color: string;  
}

export interface IState {
  title: string;
  filterShapes: IShape[];
  selectedColors: string[];
  selectedShapes: string[];  
}

export interface IAction {
  type: string;
  payload: string;
}
