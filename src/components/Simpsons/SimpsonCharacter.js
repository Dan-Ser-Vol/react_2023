import React from 'react';

// {
//     name: 'Bart',
//         surname: 'Simpson',
//     age: 10,
//     info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//     photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
// },

const SimpsonCharacter = ({character}) => {
    return (
        <div>
            <h2>{character.name} {character.surname}</h2>
            <h3>age: {character.age} years ago</h3>
            <p>{character.info}</p>
            <img src={character.photo} alt={character.name}/>
        </div>
    );
};

export default SimpsonCharacter;