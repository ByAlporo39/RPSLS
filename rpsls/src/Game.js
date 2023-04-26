import React, { useState } from 'react';
import ChoiceButton from './ChoiceButton';
import { CHOICES, getWinner } from './utils';

const Game = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [winner, setWinner] = useState(null);
    const [disabled, setDisabled] = useState(null);

    const handleChoice = (choice) => {
        setPlayerChoice(choice);
        setDisabled(true);

        const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];

        setTimeout(() => {
            setComputerChoice(computerChoice);
        }, 1000);
        setTimeout(() => {
            setWinner(getWinner(choice, computerChoice));
        }, 2000);

        clearTimeout();
    };

    return (
        <div id='contend'>
            <h1>Juega a Piedra, Papel, Tijeras, Lagarto, Spock</h1>
            {CHOICES.map((choice) => (
                <ChoiceButton disabled={disabled} key={choice} choice={choice} handleChoice={handleChoice} />
            ))}
            <p>Tu elección: {playerChoice}</p>
            <p>El juego eligió: {computerChoice}</p>
            {winner ? <p>{winner}</p> : null}

            <button onClick={() => window.location.reload()}>PLAY AGAIN</button>


        </div>
    );
};

export default Game;