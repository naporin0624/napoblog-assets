import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { ListTransition } from "./components/ListTransition";
import { LottieCheckBox } from "./components/LottieCheckBox";
import { DivBlur } from "./components/DivBlur";

export const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/div-blur">
          <DivBlur />
        </Route>
        <Route path="/list-transition">
          <ListTransition />
        </Route>
        <Route path="/">
          <LottieCheckBox />
        </Route>
      </Switch>
    </HashRouter>
  );
};
