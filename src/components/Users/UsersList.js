import React, {useState, useEffect} from 'react';
import UserItem from './UserItem';
import style from "./Users.module.css"

const UsersList = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers([...data]))
    }, [])

    console.log(users);
    return (
        <div className = {style.container}>
            {
                users.map(user=>(<UserItem key={user.id} user={user}/>))
            }
        </div>
    );

};

export default UsersList;