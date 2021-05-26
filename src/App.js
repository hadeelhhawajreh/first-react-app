import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import HornedBeasts from "./Components/HornedBeasts";
class App extends React.Component {
  render() {
 
    return (
      <>
        < Header />
        <Main />
        {/* < HornedBeasts /> */}
        <Footer />
      </>
    );
  }

}

export default App;