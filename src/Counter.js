import React, {Component} from 'react';
import './Counter.css';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            stepValue: 1
        };
    }

    changeInput = (e) => {
        this.setState({ 
            stepValue: parseInt(e.target.value) 
        });
    }

    changeValue = (action) => {
        
        this.setState( (prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;
 
            if (action === 'add') {
                currentCounterValue += prevState.stepValue;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return({
                counterValue: currentCounterValue 
            });
        });
    }

    render() {
        return(
            <div className="counter">
                Licznik:
                <span className="value">{this.state.counterValue}</span>
                <ButtonsPanel buttonMethod={this.changeValue} />
                <Step changeInputMethod={this.changeInput} />
            </div>
        )
    }
}

/* function Counter(props) {

    let randomNumber = Math.floor(Math.random() * (108 -1 + 1) + 1);
    
    return (
        <div className="counter"> 
            Counter: 
            <span className="value">
                {props.initValue}<br/>
                {randomNumber}
            </span>
        </div>
    );
} */

export default Counter;