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
import { GlitchDemo } from "./views/Glitch";
import { GlitchId } from "./views/GlitchInput/_id";
import { GlitchCustom } from "./views/GlitchInput";
import { OpeningAnimationDemo } from "./views/OpeningAnimation";
import { TitleAnimation } from "./views/TitleAnimation";
import { StartEndArrowDemo } from "./views/StartEndArrowDemo";
import { BallReflection } from "./views/BallReflection";

export const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/ball-reflection">
          <BallReflection />
        </Route>
        <Route path="/start-end-arrow-demo">
          <StartEndArrowDemo />
        </Route>
        <Route path="/title-animation">
          <TitleAnimation />
        </Route>
        <Route path="/opening-animation">
          <OpeningAnimationDemo />
        </Route>
        <Route path="/glitch-custom">
          <GlitchCustom />
        </Route>
        <Route path="/glitch/:id">
          <GlitchId />
        </Route>
        <Route path="/glitch" exact>
          <GlitchDemo />
        </Route>
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
