// routes/goatRouter.js
const express = require('express');
const router = express.Router();
const kambingController = require('../controllers/kambingController');



router.post('/kambing', kambingController.createKambing);
router.get('/kambing', kambingController.getKambing);
router.get('/kambing/:id', kambingController.getKambingById);
router.put('/kambing/:id', kambingController.updateKambing);
router.delete('/kambing/:id', kambingController.deleteKambing);



module.exports = router;