import React from 'react'

const StocksComponent = (props) => {
    console.log("Props: " + props.stockName)
    return ( 
        <p>
            {props.stockName}
        </p>
    )

}

export default StocksComponent
