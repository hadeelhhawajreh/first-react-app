import  React from "react";

class Header extends React.Component{
  render(){
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      textAlign:'center'
    };

    return(
      <>
     <header>
     <h1 style={mystyle}> The Horns </h1>
     
     </header>
      </>
    );
  }

}

export default Header;