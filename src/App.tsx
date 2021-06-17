import './App.css';
import config from './config';
import firebase from "firebase/app";
import "firebase/firestore";
import { Route, Switch } from 'react-router-dom';

import {
  FirestoreCollection,
  FirestoreProvider
} from "@react-firebase/firestore";

import MatchTable from './components/MatchTable';
import StreamPreview from './components/StreamPreview';
import ShiaijoGrid from './components/ShiaijoGrid';
import NotFound from './components/NotFound';
import ShiaijoOverlay from './components/ShiaijoOverlay';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';


function App() {

  const showNav = !window.location.href.match(/shiaijo/)

  return (
    <FirestoreProvider {...config} firebase={firebase}>
      <BrowserRouter>
        <div className="d-flex flex-column h-100">
          {showNav && <Navigation></Navigation>}

          <div className="h-100">
            <FirestoreCollection path={"matches"}>
              
              {(data) => (
                <Switch>
                  <Route path="/table">
                    <div className="container-fluid">
                      <MatchTable matches={data.value} keys={ data.ids}></MatchTable>
                    </div>
                  </Route>

                  <Route path="/preview">
                    <StreamPreview></StreamPreview>
                  </Route>

                  <Route path="/" exact>
                    <ShiaijoGrid matches={data.value}></ShiaijoGrid>
                  </Route>

                  <Route path="/overlays">
                    <ShiaijoGrid matches={data.value}></ShiaijoGrid>
                  </Route>

                  <Route path="/shiaijo/:id">
                    <ShiaijoOverlay matches={data.value}></ShiaijoOverlay>
                  </Route>

                  <Route path="*" exact>
                    <NotFound></NotFound>
                  </Route>
                </Switch>
              )}
            </FirestoreCollection>
          </div>
        </div>
      </BrowserRouter>
    </FirestoreProvider>
  );
}

export default App;
