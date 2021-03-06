import React from "react"
import "./countdown.scss";
import Countdown, { zeroPad } from 'react-countdown-now';


class CountdownComponent extends React.Component {

    render() {
    const DATE_OF_CAREER_FAIR = new Date('November 17, 2020 10:00:00');
    var DATE_NOW = new Date();
    const dateboolean = DATE_OF_CAREER_FAIR < DATE_NOW;

        const countDownRenderer = ({ days, hours, minutes, seconds }) => {
            return (
                <div className="countDownRow">
                    <div className="countDownColumn">
                        <p id="countdown-numbers">{zeroPad(days, 2)}</p>
                        <p id="timeUnit">DAYS</p>
                    </div>
                    <div className="countDownColumn">
                        <p id="countdown-numbers">{zeroPad(hours, 2)}</p>
                        <p id='timeUnit'>HOURS</p>
                    </div>
                    <div className="countDownColumn">
                        <p id="countdown-numbers">{zeroPad(minutes, 2)}</p>
                        <p id='timeUnit'>MINUTES</p>
                    </div>
                    <div className="countDownColumn">
                        <p id="countdown-numbers">{zeroPad(seconds, 2)}</p>
                        <p id='timeUnit'>SECONDS</p>
                    </div>


                </div>
            );
        };

    /*
     * The date here is hardcoded because there is no api that gives the dates as answer.
     **/
    return (
        <div className="countdown-container">
        
        {dateboolean ? <h3 className="happening">Welcome to the Armada Fair!</h3> : <div className="countdown-width-container"><Countdown date={DATE_OF_CAREER_FAIR} renderer={countDownRenderer} /></div>}
    </div>
                
    );
}
}

export default CountdownComponent;
