import React, { Component } from 'react'
import {withRouter} from 'react-router'

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
        const { stocks } = this.state
        console.log(typeof stocks)
        if ( stocks ) {
            var name = Object.keys(stocks)
            console.log(name)
        }
        return (
            <div>
                {stocks && name.map(stock => 
                    <h1>{stocks[name].stockData}</h1>
                )}
            </div>
        )
    }
}


export default withRouter(StocksContainer)