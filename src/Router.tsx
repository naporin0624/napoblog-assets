import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ListTransition } from "./components/ListTransition";
import { LottieCheckBox } from "./components/LottieCheckBox";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/list-transition">
          <ListTransition />
        </Route>
        <Route path="/">
          <LottieCheckBox />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
