import React, { Component, Fragment } from "react";
import { Layout } from "antd";
import configureStore from "../../redux/configureStore";
import { Provider } from "react-redux";
import TopMenu from "../../components/Menu/Menu";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import routes from "./../../routes";

const store = configureStore();

class App extends Component {
  showContentsMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      console.log(routes);
      
      result = routes.map((route, index) => {
        return (
          <div>
             <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={props => route.main(props)}
            />
          </div>
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  render() {
    const { Content } = Layout;
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Fragment>
              <TopMenu />
              <Content style={{ padding: "0 100px" }}>
                {this.showContentsMenus(routes)}
              </Content>
            </Fragment>
          </Switch>
          <Redirect exact from="/" to="/blogs" /> 
        </Router>
      </Provider>
    );
  }
}

export default App;
