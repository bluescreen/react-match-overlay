import './App.css';
import firebase from "firebase/app";
import "firebase/firestore";
import { Route, NavLink, Switch, useParams } from 'react-router-dom';

import {
  FirestoreCollection,
  FirestoreProvider
} from "@react-firebase/firestore";

import MatchTable from './components/MatchTable';
import ShiaijoGrid from './components/ShiaijoGrid';
import NotFound from './components/NotFound';
import Shiaijo from './components/Shiaijo';

const config = {
  apiKey: "AIzaSyB1_TKg8YzkQrAvWncBJC366xIAZd0ksZc",
  authDomain: "ekc-stream.firebaseapp.com",
  projectId: "ekc-stream",
  storageBucket: "ekc-stream.appspot.com",
  messagingSenderId: "4117648448",
  appId: "1:4117648448:web:ed2bb47a243a52473bfba5"
};


function App() {
  const {id} = useParams()
  const areaMap = {A: 0, B: 1, C: 2,D: 3}
  const areaId = areaMap[id] ?? 0;

  return (
    <FirestoreProvider {...config} firebase={firebase}>

      <nav class="nav nav-pills nav-justified m-4">
        <NavLink className="nav-item nav-link" to="/table">Tabelle</NavLink>
        <NavLink className="nav-item nav-link" to="/overlays">Übersicht</NavLink>
        <NavLink className="nav-item nav-link" to="/shiaijo/A">A</NavLink>
        <NavLink className="nav-item nav-link" to="/shiaijo/B">B</NavLink>
        <NavLink className="nav-item nav-link" to="/shiaijo/C">C</NavLink>
        <NavLink className="nav-item nav-link" to="/shiaijo/D">D</NavLink>
      </nav>

      <div className="">
        <FirestoreCollection path={"matches"}>

          {(data) => (
            <Switch>
              <Route path="/table">
                <div className="container">
                  <h1 className="my-4">Active Matches</h1>
                  <MatchTable matches={data.value}></MatchTable>
                </div>
              </Route>

              <Route path="/overlays">
                <ShiaijoGrid matches={data.value}></ShiaijoGrid>
              </Route>

              <Route path="/shiaijo/:id">
                {data.value && <Shiaijo data={data.value[areaId]}></Shiaijo>}
              </Route>

              <Route path="*" exact>
                <NotFound></NotFound>
              </Route>
            </Switch>
          )}
        </FirestoreCollection>
      </div>

    </FirestoreProvider>
  );
}

export default App;
