
// require('dotenv').config();
// const fetch = require('node-fetch');
// const base_url = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol="

var fs = require('fs')
var express = require('express');
var app = express()
var cors = require('cors')



const stock_tickers = ["ibm", "orcl", "fb", "intc", "msft", "aapl", "googl"]

fs.readFileAsync = function(filename, enc) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, enc, function(err, data){
            if (err) 
                reject(err); 
            else
                resolve(data);
        });
    });
};

const populateDB = () => {
    var obj = {}
    stock_tickers.map(stock_name => {
        fs.readFileAsync(`./assets/${stock_name}.json`, 'utf8')
        .then(response => JSON.parse(response))
        .then(data => {
            obj[stock_name] = data["Monthly Time Series"]
            })
        .catch(err => console.log(err))
    })
    return obj
}

var index = populateDB()

app.use(cors())

app.get('/api/index', (req, res) => {
    var stocksData = []
    var currentData = {}
    var currentDate = new Date()
    var today = currentDate.getFullYear() + '-' + (currentDate.getMonth()+1) + '-'+ currentDate.getDate();
    stock_tickers.map(name => {     
        var dates = Object.keys(index[name])   
        currentData = index[name][dates[dates.length - 1]]
        stocksData.push({
            name: name,
            stockData: currentData,
            date: today
    })
    })
    return res.send(stocksData)
})



app.listen("5000", () => console.log("Server running"))