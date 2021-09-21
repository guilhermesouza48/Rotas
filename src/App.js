import React from 'react';
import { Route, Switch } from "react-router-dom"
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

          <Route exact path="/record" render={() => <Recordtv />}></Route>

          <Route exact path="/record/balancogeral" render={() => <Balanco />}></Route>

          <Route exact path="/record/balancogeral/nc" render={() => <Nc />}></Route>

          <Route exact path="/cultura" render={() => <CulturaTv />}></Route>

          <Route exact path="/band" render={() => <BandTv />}></Route>

          <Route exact path="/globo" render={() => <Globotv />
          }></Route>

          <Route exact path="/sbt" render={() => <Sbttv />
          }></Route>

        </Switch>

      </main>
    </div>
  );
}
export default App;
