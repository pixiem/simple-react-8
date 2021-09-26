import "./card.css"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    const { name, img, position, expert, nationality, demand } = props.player
    return (
        <div className="card-container">
            <div className="card">
                <img width="150px" src={img} alt="" />
                <h4>NAME   : {name} </h4>
                <h4>EXPERT: {expert} </h4>
                <h4>Position: {position} </h4>
                <h4>NATIONALITY: {nationality} </h4>
                <h4>DEMAND: {demand} </h4>
                <button
                    onClick={() => props.addToCart(props.player)} className="button">
                    {element} SELECT</button>

            </div>

        </div>
    );
};

export default Card;