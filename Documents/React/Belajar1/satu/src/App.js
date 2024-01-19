import React, { Component } from "react";
import "./App.css";
import Alert from "./Components/Alert";
// import BMI from "./Components/BMI";
// import Osis from "./Components/Form-Osis";
//import Pancasila from "./Components/Pancasila";
//import Osis from "./Components/Form-Osis";
//import Pancasila from "./Components/Pancasila";
import Osis from "./Components/Form-Osis";
// import Alert from './Components/Alert';

class App extends Component {
  warna = () => {
    return <Alert />;
  };

  render() {
    return (
      <>
        <Osis/>
      </>
    );
  }
}

export default App;
