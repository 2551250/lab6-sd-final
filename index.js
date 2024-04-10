//create cars api using express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const cars = require('./cars.json');

//get all cars
app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send('API reached');
  });

app.get('/cars', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.json(cars);
});

//get car by id
app.get('/cars/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const id = req.params.id;
    const car = cars.find(car => car.id === id);
    res.json(car);
});

//update car
app.put('/cars/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const id = req.params.id;
    const updatedCar = req.body;
    const index = cars.findIndex(car => car.id === id);
    cars[index] = updatedCar;
    res.json(updatedCar);
});

//delete car
app.delete('/cars/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const id = req.params.id;
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    res.json({ message: `Car with id ${id} deleted` });
});

//add car
app.post('/cars', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    console.log(req);
    const newCar = req.body;
    console.log(newCar);
    cars.push(newCar);
    res.json(newCar);
});

//start app at localhost:3001
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});