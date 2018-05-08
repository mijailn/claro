import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Header } from 'Components/common';
import Home from 'Containers/home';
import DetallePelicula from 'Containers/detalle';

const App = ({ store }) => (
  <div>
    <div>
      <Header />
    </div>
    <main>
      <Redirect exact from="/" to="/mexico/sapelcienficc" />
      <Route exact path="/mexico/sapelcienficc" component={Home} />
      <Route
        exact
        path="/mexico/vcard/home/:nombre/:id"
        component={DetallePelicula}
      />
    </main>
  </div>
);
export default App;
