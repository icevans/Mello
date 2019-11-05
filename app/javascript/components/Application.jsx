import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import TopNav from "./shared/TopNav";
import BoardsDashboardContainer from "./dashboard/BoardsDashboardContainer";
import BoardContainer from "./BoardContainer.jsx";

import { fetchBoards } from "../actions/BoardActions";

class Application extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = this.context.store.getState();

    return (
      <div>
        <TopNav />
        <Route path="/" exact component={BoardsDashboardContainer} />
        <Route path="/(boards|cards)/:id" component={BoardContainer} />
      </div>
    );
  }
}

export default Application;
