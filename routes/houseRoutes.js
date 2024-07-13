const express = require('express');
const router = express.Router({ mergeParams: true });
const houseController = require('../controllers/houseController');

router.get('/', houseController.getAllHousesForUser);
router.post('/', houseController.createHouseForUser);
router.put('/:houseId', houseController.updateHouseForUser);
router.delete('/:houseId', houseController.deleteHouseForUser);

module.exports = router;
