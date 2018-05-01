import React from 'react';
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

const app = () => {
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

export default app;
