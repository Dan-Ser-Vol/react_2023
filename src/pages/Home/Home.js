import React from 'react';

const Home = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1 style={{textAlign: 'center'}}>Ласкаво Просимо</h1>
            <h3 style={{textAlign: 'center'}}>Виберіть розділ вверху екрану </h3>
            <img
                style={{ width: '100%'}}
                src="https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg" alt=""/>
        </div>
    );
};

export default Home;
