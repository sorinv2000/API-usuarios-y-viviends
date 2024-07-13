const houses = require('../models/house');
const users = require('../models/user');

// Utility functions
const findHouseById = (userId, houseId) => houses.find(house => house.userId === userId && house.id === houseId);
const findUserById = (id) => users.find(user => user.id === id);

module.exports = {
    getAllHousesForUser: (req, res) => {
        const user = findUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ code: 404, message: 'User not found' });
        }

        let userHouses = houses.filter(house => house.userId === req.params.userId);
        // console.log("UserHouses", userHouses)

        const { city, street, country } = req.query;
        if (city) {
            userHouses = userHouses.filter(house => house.city.toLowerCase() === city.toLowerCase());
        }
        if (street) {
            userHouses = userHouses.filter(house => house.street.toLowerCase() === street.toLowerCase());
        }
        if (country) {
            userHouses = userHouses.filter(house => house.country.toLowerCase() === country.toLowerCase());
        }

        res.status(200).json(userHouses);
    },

    createHouseForUser: (req, res) => {
        const user = findUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ code: 404, message: 'User not found' });
        }
        const newHouse = req.body;
        newHouse.id = `${houses.length + 1}`;
        newHouse.userId = req.params.userId;
        houses.push(newHouse);
        res.status(201).json(newHouse);
    },

    updateHouseForUser: (req, res) => {
        const house = findHouseById(req.params.userId, req.params.houseId);
        if (!house) {
            return res.status(404).json({ code: 404, message: 'House not found' });
        }
        Object.assign(house, req.body);
        res.status(200).json(house);
    },

    deleteHouseForUser: (req, res) => {
        const houseIndex = houses.findIndex(house => house.userId === req.params.userId && house.id === req.params.houseId);
        if (houseIndex === -1) {
            return res.status(404).json({ code: 404, message: 'House not found' });
        }
        houses.splice(houseIndex, 1);
        res.status(204).send();
    }
};
