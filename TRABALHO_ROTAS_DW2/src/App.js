import React from 'react';
import { Route, Switch } from "react-router-dom"
import Header from './Comp/Canais/Canais';
import Recordtv from './Record/Record';
import Balanco from './Record/Jornal/BalancoGeral';
import Nc from './Record/Jornal/Ncs/Nc';
import CulturaTv from './Comp/Cultura/Cultura';
import BandTv from './Comp/Band/Band';
import Globotv from './Comp/Globo/Globo';
import Sbttv from './Comp/SBT/Sbt';
import Home from './Comp/Home/Home';


function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" render={() => <Home />}></Route>

          <Route exact path="/Record" render={() => <Recordtv />}></Route>

          <Route exact path="/Record/BalancoGeral" render={() => <Balanco />}></Route>

          <Route exact path="/Record/Jornal/Nc" render={() => <Nc />}></Route>

          <Route exact path="/Cultura" render={() => <CulturaTv />}></Route>

          <Route exact path="/Band" render={() => <BandTv />}></Route>

          <Route exact path="/Globo" render={() => <Globotv />
          }></Route>

          <Route exact path="/Sbt" render={() => <Sbttv />
          }></Route>

        </Switch>

      </main>

      <main>
        <div>
          <Home
            titulo={"CANAIS DE TV GRATIS E ONLINE!"}
            color={"rgb(60,50,80)"}
          ></Home>
        </div>
      </main >

    </div >
  );
}

export default App;
