import React from "react";
import { Route, Switch } from "react-router-dom";
import * as pages from "../pages";

const RouterPage= () => {
  return (
    <Switch>
      <Route path="/list" component={pages.MyPokemonList} exact />
      <Route path="/" component={pages.PokemonList} exact />
      <Route path="/detail" component={pages.PokemonDetail} exact />
    </Switch>
  );
};

export default RouterPage;
