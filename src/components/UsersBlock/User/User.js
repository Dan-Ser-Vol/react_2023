import React from 'react';
import style from "./User.module.css"

const User = ({user}) => {
    return (
        <div className={style.root}>
          <h3>{user.name}</h3>
          <div><span className={style.span}>ID:</span> {user.id}</div>
          <div><span className={style.span}>Surname:</span> {user.username}</div>
          <div><span className={style.span}>Email:</span> {user.email}</div>
          <div><span className={style.span}>Phone:</span> {user.phone}</div>
          <div><span className={style.span}> Website:</span> {user.website}</div>
        </div>
    );
};

export {User}