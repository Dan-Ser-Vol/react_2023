import React, {FC} from 'react';

const HomePage: FC = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1 style={{textAlign: 'center'}}>Ласкаво Просимо</h1>
            <h3 style={{textAlign: 'center'}}>Виберіть розділ вверху екрану </h3>
            <img
                style={{margin: "0 auto", width: '60%'}}
                src="https://static.vecteezy.com/system/resources/previews/001/195/702/original/speech-bubbles-pixel-welcome-png.png"
                alt="welcome"/>
        </div>
    );
};

export {HomePage};