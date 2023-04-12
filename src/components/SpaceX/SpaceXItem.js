import React from 'react';
import style from './SpaceX.module.css'

const SpaceXItem = ({launch}) => {
    return (
        <div className={style.item}>
            <div className={style.box}>MISSION NAME: <span>{launch.mission_name}</span></div>
            <div>LAUNCH YEAR: <span>{launch.launch_year}</span></div>
            <img src={launch.links.mission_patch_small}/>
        </div>
    );
};

export default SpaceXItem;