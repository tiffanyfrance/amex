const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

app.use(cors())

const data = [
  {
    "item": "unicycles",
    "average unit price": "$100",
    "units sold": 34,
    "revenue total": "$3,400"
  },
  {
    "item": "weather vanes",
    "average unit price": "$15",
    "units sold": 67,
    "revenue total": "$1,005"
  },
  {
    "item": "catapults",
    "average unit price": "$200",
    "units sold": 5,
    "revenue total": "$1,000"
  },
  {
    "item": "harpoons",
    "average unit price": "$50",
    "units sold": 5,
    "revenue total": "$250"
  },
  {
    "item": "wheelbarrows",
    "average unit price": "$40",
    "units sold": 78,
    "revenue total": "$3,120"
  },
  {
    "item": "yo-yos",
    "average unit price": "$13",
    "units sold": 3000,
    "revenue total": "$39,000"
  },
  {
    "item": "blowguns",
    "average unit price": "$45",
    "units sold": 34,
    "revenue total": "$1,530"
  },
  {
    "item": "snow globes",
    "average unit price": "$10",
    "units sold": 5,
    "revenue total": "$50"
  },
  {
    "item": "didgeridoos",
    "average unit price": "$30",
    "units sold": 300,
    "revenue total": "$9,000"
  },
  {
    "item": "lava lamps",
    "average unit price": "$20",
    "units sold": 78,
    "revenue total": "$1,560"
  }
];

app.get('/getData', (req, res) => res.send(data))

app.listen(port, () => console.log(`API server listening on port ${port}!`))