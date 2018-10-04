import express from 'express';
import blockchainData from '../models/all'

const router = express.Router();

router.get('/', (req, res) => {
    const data = blockchainData()
    const err = null
    res.json({err, data})
})

export default router