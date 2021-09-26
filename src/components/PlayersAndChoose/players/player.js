import './players.css'
import React, { useEffect, useState } from 'react';
import Card from '../../card/card';
import Add from '../add/Add';

const Player = () => {
    const [player, setPlayers] = useState([]);
    const [clicked, setClicked] = useState([]);

    useEffect(() => {
        fetch('./member.JSON')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])






    const addToCart = (player) => {
        const display = [...clicked, player]
        setClicked(display);

    }
    let totalTaka = 0;
    for (const data of clicked) {

        totalTaka = totalTaka + parseInt(data.demand);

    }
    

    return (
        <>
            <div className="all-container">
                <div className="container-left" >
                    {
                        player.map(player => <Card
                            player={player}
                            addToCart={addToCart} ></Card>)
                    }
                </div>
                <div className="container-right">
                    <div className="add">

                        <div className="total-cost" >
                            <h2>Total Coders: {clicked.length}</h2>
                            <h2>Total Cost:{totalTaka}  </h2>
                        </div>

                        {
                            clicked.map(player => <Add
                                className="main-add" player={player}></Add>)
                        }
                    </div>
                </div>
            </div>


        </>
    );
};

export default Player;