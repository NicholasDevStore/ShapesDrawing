// @flow
import React from "react";
import { Provider } from "react-redux";
import Theme from "theme";
import store from "stores";
import { Header } from "components/atoms/Header";
import { FlexCol } from "components/atoms/FlexCol";
import { FlexRow } from "components/atoms/FlexRow";
import ShapeFilterList from "components/ShapeFilterList";
import ColorFilterList from "components/ColorFilterList";
import ShapePanel from "components/ShapePanel";

const App = () => {
  return (
    <Provider store={store}>
      <Theme>
        <Header id="header">SHAPES</Header>
        <FlexCol padding="2rem">
          <FlexRow justify="space-between" wrap="wrap">
            <ShapeFilterList />
            <ColorFilterList />
          </FlexRow>
          <ShapePanel />
        </FlexCol>
      </Theme>
    </Provider>
  );
};

export default App;
