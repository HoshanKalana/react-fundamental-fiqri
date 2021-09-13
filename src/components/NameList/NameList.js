import react from "react";

import NameListItem from "./NameListItem";

function NameList(){
    return(
        <react.Fragment>
        <h1>NameList</h1>
        <ul>
            <NameListItem  name="Hoshan Kalana" course="React Js"/>
            <NameListItem  name="pathmila sachinthani" course="SQL"/>
            <NameListItem  name="Ravindu Chinthaka" course="Java"/>

        </ul>
        </react.Fragment>
    )
}

export default NameList;