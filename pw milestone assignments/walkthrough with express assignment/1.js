const express = require('express');
const app = express();

const men = [
  {
    id: '1',
    name: "Men's Classic Blue Shirt",
    brand: 'Fashion Masters',
    price: 34.99,
    color: 'Blue',
    size: 'L',
    category: 'Shirts',
  },
  {
    id: '2',
    name: "Men's Slim Fit Chinos",
    brand: 'Modern Threads',
    price: 42.95,
    color: 'Khaki',
    size: '32/32',
    category: 'Pants',
  },
  {
    id: '3',
    name: "Men's Casual Crewneck Sweater",
    brand: 'Cozy Comforts',
    price: 29.99,
    color: 'Gray',
    size: 'M',
    category: 'Sweaters',
  },
  {
    id: '4',
    name: "Men's Leather Biker Jacket",
    brand: "Rider's Edge",
    price: 189.95,
    color: 'Black',
    size: 'XL',
    category: 'Jackets',
  },
  {
    id: '5',
    name: "Men's Running Shoes",
    brand: 'SpeedRunners',
    price: 79.99,
    color: 'Black/Red',
    size: '11',
    category: 'Shoes',
  },
  {
    id: '6',
    name: "Men's Graphic Print T-shirt",
    brand: 'Urban Expressions',
    price: 22.5,
    color: 'White',
    size: 'S',
    category: 'T-shirts',
  },
  {
    id: '7',
    name: "Men's Cargo Shorts",
    brand: 'Adventura',
    price: 38.75,
    color: 'Olive',
    size: '34',
    category: 'Shorts',
  },
  {
    id: '8',
    name: "Men's Formal Three-Piece Suit",
    brand: 'Elegant Attire',
    price: 249.99,
    color: 'Navy',
    size: '42R',
    category: 'Suits',
  },
  {
    id: '9',
    name: "Men's Sports Performance Polo",
    brand: 'ActiveSport',
    price: 27.95,
    color: 'Royal Blue',
    size: 'L',
    category: 'Polos',
  },
  {
    id: '10',
    name: "Men's Aviator Sunglasses",
    brand: 'SunShades',
    price: 59.0,
    color: 'Gunmetal',
    size: 'One Size',
    category: 'Accessories',
  },
];

const women = [
  {
    id: '1',
    name: "Women's Floral Maxi Dress",
    brand: 'Garden Elegance',
    price: 54.99,
    color: 'Pink',
    size: 'M',
    category: 'Dresses',
  },
  {
    id: '2',
    name: "Women's Skinny Jeans",
    brand: 'Fashionista',
    price: 49.95,
    color: 'Blue',
    size: '28/30',
    category: 'Jeans',
  },
  {
    id: '3',
    name: "Women's Cozy Knit Sweater",
    brand: 'Warmth & Style',
    price: 39.99,
    color: 'Beige',
    size: 'S',
    category: 'Sweaters',
  },
  {
    id: '4',
    name: "Women's Faux Leather Moto Jacket",
    brand: 'Rebel Chic',
    price: 89.95,
    color: 'Black',
    size: 'L',
    category: 'Jackets',
  },
  {
    id: '5',
    name: "Women's Running Shoes",
    brand: 'Swift Stride',
    price: 74.99,
    color: 'Gray/Purple',
    size: '8',
    category: 'Shoes',
  },
  {
    id: '6',
    name: "Women's Striped Boatneck Top",
    brand: 'Seaside Charm',
    price: 28.5,
    color: 'Navy/White',
    size: 'XS',
    category: 'Tops',
  },
  {
    id: '7',
    name: "Women's Bermuda Shorts",
    brand: 'Summer Breeze',
    price: 34.75,
    color: 'Khaki',
    size: '10',
    category: 'Shorts',
  },
  {
    id: '8',
    name: "Women's Formal Evening Gown",
    brand: 'Enchanting Evenings',
    price: 299.99,
    color: 'Emerald',
    size: '6',
    category: 'Dresses',
  },
  {
    id: '9',
    name: "Women's Ruffled Blouse",
    brand: 'Feminine Flair',
    price: 32.95,
    color: 'Lilac',
    size: 'M',
    category: 'Tops',
  },
  {
    id: '10',
    name: "Women's Cat-Eye Sunglasses",
    brand: 'Chic Shades',
    price: 64.0,
    color: 'Tortoise',
    size: 'One Size',
    category: 'Accessories',
  },
];

app.get('/', (req, res) => {
  res.send('Welcome to Men and Women Dummy data.');
});
app.get('/men', (req, res) => {
  res.json({ men });
});
app.get('/women', (req, res) => {
  res.json({ women });
});
app.get('*', (req, res) => {
  res.send('Page not found');
});

app.listen(3000, () => console.log('Server started listening to port 3000'));
