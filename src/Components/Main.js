// HornedBeasts
// TODO https://stackoverflow.com/questions/48131100/react-render-array-of-components

import React from "react";
import HornedBeasts from "./HornedBeasts";
import HornedBeastsArr from"../data"
class Main extends React.Component {
    render() {
        return (
            <>
                {HornedBeastsArr.map((e, indx) => {
                    console.log(e);
                    return <HornedBeasts key={indx} title={e.title} imgUrl={e.image_url} description={e.description}  numOfHorns={e.horns}/>
                })}

                {/* <HornedBeasts title={'Unicorn Head'} imgUrl={"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"} description={"Someone wearing a creepy unicorn head mask"} /> */}

            </>
        );
    }

}

export default Main;
