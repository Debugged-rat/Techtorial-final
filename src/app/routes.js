import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Game } from "../pages/game-pages/page1";
import { Game2 } from "../pages/game-pages/page2";
import { Game3 } from "../pages/game-pages/page3";
import { Game4 } from "../pages/game-pages/page4";
import { Game5 } from "../pages/game-pages/page5";
import { Game6 } from "../pages/game-pages/page6";
const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game/>}/>
        <Route path="/game2" element={<Game2/>}/>
        <Route path="/game3" element={<Game3/>}/>
        <Route path="/game4" element={<Game4/>}/>
        <Route path="/game5" element={<Game5/>}/>
        <Route path="/game6" element={<Game6/>}/>

        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      {/* <Socialicons /> */}
    </div>
  );
}

export default AppRoutes;
