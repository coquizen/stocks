import React, { Component } from 'react'
import StocksComponent from './StocksComponent'
class StocksContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stocks: {}
        }
    }

    componentDidMount() {
        fetch('/api/index')
        .then(response => response.json())
        .then(data => {
            this.setState({
                stocks: data
            })
        })
    }

    render() {
        console.log("State: " + Object.keys(this.state.stocks))
        var names = Object.keys(this.state.stocks)
        console.log(names)
        if (names.length > 0) {
            return (
                <div>
                {names.map(name => <StocksComponent key={name} stockName={name} />)}
                </div> 
            )
        } else {
            return (
                <p>Empty State</p>
            )
        }
    }
}

export default StocksContainer