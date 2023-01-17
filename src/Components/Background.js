import React from 'react'
import p5 from 'p5'
import TOPOLOGY from 'vanta/dist/vanta.topology.min'

import './Background.css'

// TODO: Add automatic re-rendering of background every 1 minuite - Implmenet via ticking

class Background extends React.Component {

    constructor() {
        super()
        this.vantaRef = React.createRef()
    }

    componentDidMount() {
        this.vantaEffect = TOPOLOGY({
          el: this.vantaRef.current,
          p5: p5,
          minHeight: 1920.00,
          background: 0x2222,
          color: 0x354b44
        })
    }

    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }

    render() {
        return(
            <div className='Background' ref={this.vantaRef}>
            </div>
        );
    }
}

export default Background;