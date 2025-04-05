const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

// Static folder (if you want to serve static files)
app.use(express.static('public'));  // You can store your static files like index.html here

const meals = [
    {
        "id": 1,
        "name": "Meal Thali",
        "category": "thali",
        "price": 199,
        "description": "Traditional Indian thali with rice, roti, dal, 2 veggies, curd, and dessert",
        "image": "Images/traditional-food.jpg",
        "calories": 650,
        "rating": 4.5,
        "prepTime": "25 mins",
        "ingredients": ["Rice", "Roti", "Dal", "Seasonal Vegetables", "Curd", "Dessert"],
        "isVeg": true
    },
    {
        "id": 2,
        "name": "Chicken Biryani",
        "category": "biryani",
        "price": 249,
        "description": "Hyderabadi-style dum biryani with raita and mirchi ka salan",
        "image": "Images/chiken briayani.jpg",
        "calories": 850,
        "rating": 4.7,
        "prepTime": "40 mins",
        "ingredients": ["Basmati Rice", "Chicken", "Biryani Masala", "Yogurt", "Herbs"],
        "isVeg": false
    },
    // Add other meals here
];

// Root route to handle / request
app.get('/', (req, res) => {
    res.send('Welcome to the Meal API! Visit /api/meals to get meal data.');
});

// API route for fetching meals
app.get('/api/meals', (req, res) => {
    res.json(meals);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
