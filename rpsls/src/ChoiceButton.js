import React from 'react';

const ChoiceButton = ({ choice, handleChoice, disabled }) => (
    <button disabled={disabled} onClick={() => handleChoice(choice)}>{choice}</button>
);

export default ChoiceButton;