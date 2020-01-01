import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ListTransition } from "./components/ListTransition";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/list-transition">
          <ListTransition />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
