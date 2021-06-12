import React from "react";
import "./App.css";
import ProductImages from "./ProductImages.js";
import ProductDetails from "./ProductDetails.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/productdetails">
            <ProductDetails />
          </Route>
          <Route path="/">
            <ProductImages />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
