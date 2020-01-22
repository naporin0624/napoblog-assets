import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { ListTransition } from "./components/ListTransition";
import { LottieCheckBox } from "./components/LottieCheckBox";
import { DivBlur } from "./components/DivBlur";
import { NotFoundView } from "./views/404";

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
        <Route path="/" exact>
          <LottieCheckBox />
        </Route>
        <Route path="*">
          <NotFoundView />
        </Route>
      </Switch>
    </HashRouter>
  );
};
