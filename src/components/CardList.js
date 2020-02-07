import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    if (true) {
        throw new Error('NOOOOOOOOOO');
    }
    return(
        <div>
            {
                robots.map((user, i) => {
                                        // Using {} so that JSX will evaluate it as Javascript 
                    return( 
                    <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} /> 
                    ); 
                }) 
            }               
        </div>
    );
}

export default CardList;