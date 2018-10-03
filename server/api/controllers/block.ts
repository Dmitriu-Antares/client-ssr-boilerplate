import express from 'express'
import blockchainData from '../models/all'

const router = express.Router()

router.get('/:id', (req, res) => {
    const id = req.params.id
    const data = blockchainData()
    res.json({data: data.blocks[id-1]})
})

export default router