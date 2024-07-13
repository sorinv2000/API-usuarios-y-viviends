const users = require('../models/user');
const houses = require('../models/house');

// Utility functions
const findUserById = (id) => users.find(user => user.id === id);

module.exports = {
    getAllUsers: (req, res) => {
        res.status(200).json(users);
    },

    createUser: (req, res) => {
        const newUser = req.body;
        newUser.id = `${users.length + 1}`;
        users.push(newUser);
        res.status(201).json(newUser);
    },

    getUserById: (req, res) => {
        const user = findUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ code: 404, message: 'User not found' });
        }
        res.status(200).json(user);
    },

    updateUserPartially: (req, res) => {
        const user = findUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ code: 404, message: 'User not found' });
        }
        Object.assign(user, req.body);
        res.status(200).json(user);
    },

    updateUserCompletely: (req, res) => {
        const user = findUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ code: 404, message: 'User not found' });
        }
        Object.assign(user, req.body);
        res.status(200).json(user);
    },

    deleteUser: (req, res) => {
        const userIndex = users.findIndex(user => user.id === req.params.userId);
        if (userIndex === -1) {
            return res.status(404).json({ code: 404, message: 'User not found' });
        }
        if (houses.some(house => house.userId === req.params.userId)) {
            return res.status(409).json({ code: 409, message: 'User has houses, cannot delete' });
        }
        users.splice(userIndex, 1);
        res.status(204).send();
    }
};
