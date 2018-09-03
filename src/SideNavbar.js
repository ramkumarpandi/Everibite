import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Search from './Search';
import Result from './Result';
import OffersDeals from './Offers&Deals';

const routes = [
  {
    path: "/Search",
    sidebar: () => <div>home!</div>,
    main: () => {<Search/>}
  },
  {
    path: "/Result",
    sidebar: () => <div>bubblegum!</div>,
    main: () => {<Result/>}
  },
  {
    path: "/Offers&Deals",
    sidebar: () => <div>shoelaces!</div>,
    main: () => {<OffersDeals/>}
  }
];

const SideNavbar = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/Search">Search</Link>
          </li>
          <li>
            <Link to="/Result">Results</Link>
          </li>
          <li>
            <Link to="/Offers&Deals">Offers</Link>
          </li>
        </ul>

      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
);
export default SideNavbar;
