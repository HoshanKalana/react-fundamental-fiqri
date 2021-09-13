import react from "react";

function NameListItem(props){
    return(
        <li>{props.name} - Course - {props.course}</li>
    )
}

export default NameListItem;