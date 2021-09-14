import React, {useState, useEffect } from "react";

import NameListItem from "./NameListItem";


function NameList(){

    const [loadData, setLoadData] = useState(new Date());
    const [nameList, setNameList] = useState([
        {
            id:1,
            name: {"first": "brad","last": "gibson"},
            location: {"city": "kilcoole"},
            email: "brad.gibson@example.com",
            dob: {"date": "1993-07-20T09:44:18.674Z","age": 26},
            picture: {"large": "https://randomuser.me/api/portraits/men/75.jpg",},
        },
        {
            id:2,
            name: {"first":"Alfred", "last":"Larsen"},
            location: {"city": "Århus C."},
            email: "alfred.larsen@example.com",
            dob: { "date":"1994-10-14T08:46:27.540Z","age":27},
            picture: {"large":"https://randomuser.me/api/portraits/men/27.jpg",},
        },
        {
            id:3,
            name: {"first":"Viktor","last":"Eichmann"},
            location: {"city":"Marktleuthen"},
            email:"viktor.eichmann@example.com",
            dob: {"date":"1946-06-03T19:18:11.458Z","age":75},
            picture: {"large":"https://randomuser.me/api/portraits/men/66.jpg",},
        },
    ]);


    useEffect(() => {
        fetch("https://randomuser.me/api/").then((response) => {
            return response.json();
        }).then((responseData) => {
            setNameList(nameList =>[...nameList, responseData.results[0]]);
        });
    },[loadData]);



    const nameListComponent = () =>{
        return nameList.map ((aName) => {
                return(
                    <NameListItem 
                    key={aName.id} 
                    name={`${aName.name.first}  ${aName.name.last}`}
                    city={aName.location.city}
                    email={aName.email}
                    birthday={aName.dob.date}
                    avatar={aName.picture.large}
                    />
                );
            });
    };


    const addUserhandler = () => {
        // const newUser = 
        //     {
        //         id:3,
        //         name: {"first":"Lea","last":"Westlie"},
        //         location: {"city":"Bergsmo"},
        //         email:"lea.westlie@example.com",
        //         dob: {"date":"1992-06-22T01:14:07.545Z","age":29},
        //         picture: {"large":"https://randomuser.me/api/portraits/women/96.jpg",},
        //     };

        //     //concat
        //     //setNameList(nameList => nameList.concat(newUser));

        //     //spread operator
        //     setNameList(nameList => [...nameList,newUser]);


        //add data clicked by button clicked
        setLoadData(new Date());

    };



    return(
        <React.Fragment>            
        <div className="container p-5">
        <button type="button" className="btn btn-primary" onClick={addUserhandler}>Add New Name</button>
        <ul className="list-group pt-5">
            {nameListComponent()}
        </ul>
        </div>
        </React.Fragment>
    )
}

export default NameList;