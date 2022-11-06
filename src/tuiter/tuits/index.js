import React from "react";
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";

const TuitList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    console.log(tuitsArray)
    return(
        <ul className="list-group">
            {
                tuitsArray.map((tuit) => <TuitItem key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    )
}

export default TuitList;