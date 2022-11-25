var express = require('express');
var router = express.Router();
const controller = require('../controller/index');

router.post('/insert-result', controller.insert_result);
router.get('/get_building_list', controller.get_building_list);
router.get('/get_unit_list/:building', controller.get_unit_list);
router.get('/get_unit/:unit', controller.get_unit);

module.exports = router;
