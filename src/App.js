// @flow
import React, {Component} from "react";
import Layout from "./components/layout.js";
import Escher from "./components/escher.js";
// import Graphs from "./components/graphs.js";
// import L_Data from "./data/esher_map_pch_0317.json";
//
//
// import Footer from './components/Footer';
import FilePicker from './components/FilePicker';
import EscherData from './containers/EscherData';


class App extends Component {
  render() {
    return (
      <Layout>
	      <FilePicker />
	      {/*<Footer />*/}
        {/*<input type="file"*/}
               {/*accept="application/json"*/}
               {/*onChange={(e)=>this._handleImageChange(e)} />*/}
        {/*<Graphs />*/}
        <EscherData />
      </Layout>
    );
  }
}

export default App;
