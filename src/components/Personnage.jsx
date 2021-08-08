import React from 'react';

const Personnage = ({ personnages, rename }) => {
    let id = 0
    return (
        <>
            {personnages.map(e => {
                id++
                return (
                    <div key={id} style={{ "border": '1px solid black' }}>
                        <p><strong>Nom complet : </strong>{e.nom + " " + e.prenom}</p>
                        <p><strong>Age : </strong>{e.age}</p>
                        <p><strong>Commune : </strong>{e.commune}</p>
                    </div>
                )
            })}
            <button onClick={rename}>rename</button>
        </>
    );
};

export default Personnage;