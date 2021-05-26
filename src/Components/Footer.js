import React from "react";

class Footer extends React.Component {
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            textAlign:'center'
          };

          
        return (
            <>
                <footer>
                    <h5 style={mystyle}> Copy Right bY Hadeel </h5>

                </footer>
            </>
        );
    }

}

export default Footer;