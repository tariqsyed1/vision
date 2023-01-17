import React from 'react';
import Time from  './Time'
import Background from './Background'
import BlackBackground from './BlackBackground'
import Spotify from './Spotify'
import Weather from './Weather'

import './Grid.css'

// TODO: Update Grid.css
// TOOD: Make grid act as controller for whole app - Control ticks/intervals, check time for auto dark mode

class Grid extends React.Component {

    render() {
        return(
            <>
            <Background/>
            <div className='Grid'>
                <div id='GridElement'>
                    <Time />
                </div>
                <div id='GridElement'>
                    <Spotify />
                    <Weather />
                </div>
            </div>
            </>
            
        );
    }
}

export default Grid;