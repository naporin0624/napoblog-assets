import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { ListTransition } from "./components/ListTransition";
import { LottieCheckBox } from "./components/LottieCheckBox";
import { DivBlur } from "./components/DivBlur";
import { SwipeObjectAnimation } from "./components/SwipeObjectAnimation";
import { VectaryDemo } from "./components/vectary-demo/";
import { AntTabDemo } from "./views/AntTabDemo/";
import { NotFoundView } from "./views/404";
import { TabUI } from "./views/TabUI";

export const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/tab">
          <TabUI />
        </Route>
        <Route path="/ant-tab-demo">
          <AntTabDemo />
        </Route>
        <Route path="/vectary-demo">
          <VectaryDemo />
        </Route>
        <Route path="/swipe-object-animation">
          <SwipeObjectAnimation />
        </Route>
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
