import React from 'react';
import './Step.css';

function Step(props) {
    return (
        <div className="step">
            <label htmlFor="step">Krok:</label>
            <input name="step" id="step" type="number" min="1" placeholder="1" onChange={props.changeInputMethod}  />
        </div>);
}
export default Step;