import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Home from './containers/Home/Home';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
            <Layout>
                <Route path="/" exact component={Home}/>
                <Route path="/checkout" exact component={Checkout}/>
                <Route path="/burger-builder" exact component={BurgerBuilder}/>
            </Layout>
        </div>
    );
  }
} 

export default App;

