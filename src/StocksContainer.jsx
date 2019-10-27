import React, { Component } from 'react'

class StocksContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/index')
        .then(response => {
            let hi = response.json()
            console.log(hi)
            return hi
        })
        .then(data => {
            console.log(data)
            let stArr = data.map(stock => {
                var fieldName = Object.keys(stock.stockData)
                console.log(`fieldName: ${fieldName}`)
                fieldName.map(k => {
                    console.log(k.slice(3))
                })
                return {
                    [stock.name]: stock.stockData,
                    stock: 1
                }
            })


            console.log('stArr', JSON.stringify(stArr))
 
        })
    }

    render() {
        const { stocks } = this.state
        console.log(stocks)
        return (
            <div>
 
            </div>
                /* {console.log(stocksName[2])}
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>open</th>
                            <th>low</th>
                            <th>volume</th>
                        </tr>
                    </thead>
                    {stocksName.map(name => 
                        <tr>
                            {this.state[name].map(stock => 
                                <React.Fragment>
                                    <td>{name}</td>
                                </React.Fragment>
                        )}
                        </tr>
                    )}
                    </table>
                                 */
        )
    }
}

export default StocksContainer