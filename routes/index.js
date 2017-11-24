import express from 'express';
import StoreCtrl from '../controllers/StoreController';
import { catchErrors } from '../handlers/errorHandlers';

const router = express.Router();

// Do work here
router.get('/', catchErrors(StoreCtrl.getStores));
router.get('/stores', catchErrors(StoreCtrl.getStores));
router.get('/add', StoreCtrl.addStore);
router.post('/add', catchErrors(StoreCtrl.createStore));

module.exports = router;
