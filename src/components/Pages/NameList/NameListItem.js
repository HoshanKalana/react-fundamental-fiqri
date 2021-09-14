import React from "react";

function NameListItem(props) {
    return (
        <li className="list-group-item shadow-sm p-3 mb-5 bg-body rounded">
            <div className="row align-items-center">
                <div className="col-2">
                    <img className="border border-secondary rounded-circle" src={props.avatar} alt={props.name} />
                </div>
                <div className="col-10">
                    <h3 className="text-secondary text-capitalize"> {props.name}</h3>
                    <p className="fw-light">{props.city} | {props.email}</p>
                    <small>Birthday: {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))}</small>
                </div>
            </div>
        </li>
    )
}

export default NameListItem;