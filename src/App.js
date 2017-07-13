// @flow
import React, { Component } from 'react';
import Layout from './components/layout.js';
import Escher from './components/escher.js';
import Graphs from './components/graphs.js';
import L_Data from './data/esher_map_pch_0317.json';


class App extends Component {
  render() {
    let [MetaData, Data] = L_Data;
    return (
      <Layout>
        <Graphs />
        <Escher MetaData={MetaData} Data={Data} />
      </Layout>
    );
  }
}

export default App;
