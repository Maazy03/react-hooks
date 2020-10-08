import React, { Component } from 'react'

class ClassTimer extends Component {
    interval
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.inctime, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    inctime = () => {
        this.setState({
            timer: this.state.timer + 1
        })
    }


    render() {

    

        return (
            <div>
Timer -{this.state.timer}

<button onClick={()=>clearInterval(this.interval)}>STOP TIMEr</button>
            </div>
        )
    }
}

export default ClassTimer
