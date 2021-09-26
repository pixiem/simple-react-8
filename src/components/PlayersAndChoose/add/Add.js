import './Add.css'
import React from 'react';

const Add = (props) => {



    return (
        <>
            <div className="add-main">
                <div className="add-left">
                    <img width="100px" src={props.player.img} alt="" />
                </div>
                <div className="add-right">
                    <h3>{props.player.name}</h3>
                    <br />
                    <h3> DEMAND: {props.player.demand}</h3>
                </div>
            </div>
        </>
    );
};

export default Add;