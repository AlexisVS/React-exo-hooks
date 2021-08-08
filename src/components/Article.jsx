import React from 'react';

const Article = ({listePresence}) => {
    let i = 0
    return (
        <div>
            {listePresence.map(e => {i++; return <p key={i}>{e.nom}</p>})}
        </div>
    );
};

export default Article;