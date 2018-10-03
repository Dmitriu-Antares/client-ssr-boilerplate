import express from 'express';
import blockchainData from '../models/all'

const router = express.Router();

router.get('/', (req, res) => {
    const data = blockchainData()
    res.json({data})
})

export default router