import React, {useEffect, useState} from 'react';
import SpaceXItem from './SpaceXItem';
import style from './SpaceX.module.css'

const SpaceXList = () => {
    const [launchData, setLaunchData] = useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches')
            .then((res) => res.json())
            .then((data) => {
                setLaunchData(
                    data.filter(item => item.launch_year !== '2020')
                )
            })
    }, [])
    return (
        <div className={style.container}>
{
    launchData.map((launch)=><SpaceXItem  key={launch.flight_number} launch = {launch}/>)
}
        </div>
    );
};

export default SpaceXList;