const express = require('express');
const app = express();
const port=3000;

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 10,
        image:"/images/product-1.jpg",
        stock: 10

    },
    {
        id: 2,
        name: 'Product 2',
        price: 20,
        image:"images/product-2.jpg",
        stock: 10
    },
    {
        id: 3,
        name: 'Product 3',
        price: 30,
        image:"images/product-3.jpg",
        stock: 10

    },
    {
        id: 4,
        name: 'Product 4',
        price: 40,
        image:"images/product-4.jpg",
        stock: 10
    },
    {
        id: 5,
        name: 'Product 5',
        price: 50,
        image:"images/product-5.jpg",
        stock: 10
    },
    {
        id: 6,
        name: 'Product 6',
        price: 60,
        image:"images/product-6.jpg",
        stock: 10
    },
];

app.get('/api/products', (req, res) => {
    res.send(products);
})

app.use('/', express.static('front'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
