import React from 'react'
import './Time.css'

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
"September", "October", "November", "December"]


class Time extends React.Component {

    constructor() {
        super();
        const time = this.getCurrentTime()
        const date = this.getCurrentDate()
        this.state = {
            currentTime: time,
            currentDate: date
        }
    }

    getCurrentTime() {
        var today = new Date();
        return today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).replace(/AM|PM/g, "").trim()
    }

    getCurrentDate() {
        var today = new Date();
        console.log()
        return weekday[today.getDay()] + ' ' + months[today.getMonth()] + ' ' + today.getDate()
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({currentTime: this.getCurrentTime()})
        this.setState({currentDate: this.getCurrentDate()})
    }

    render() {
        return (
            <div>
                <div className='currentTime'>
                    {this.state.currentTime}
                </div>
                <div className='currentDate'>
                    {this.state.currentDate}
                </div>
            </div>
        );
    }

}

export default Time;