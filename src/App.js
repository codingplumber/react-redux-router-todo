import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Form from './components/Form';

const styles = {
  bodyWrapper: {
    display: 'flex',
    height: '100vh'
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div style={styles.bodyWrapper}>
            <ToDoList />
            
              <Switch>
                <Route path='/:listId' component={Form} />
                <Redirect from='/' to='/1' />
              </Switch>           
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    // boogers: state.booger
  }
};

export default connect(mapStateToProps, null)(App);
