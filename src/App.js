import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Layout from './components/layout.js';
import styles from './stylesheets/splitPane.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Layout>
    );
  }
}

export default CSSModules(App, styles);
