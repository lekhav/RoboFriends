import React from 'react';

const Scroll = props => {
    // return <h1>Hi</h1>
    // console.log(props);
    // return props.children;

    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '500px' }}>
            {props.children}
        </div>
    )
};

export default Scroll;