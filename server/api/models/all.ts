const blockchainData = () => {
    let blockchain = {id:1, name:'Main blockhain', blocks: []}
    for(let i = 0; i < 40; i++) {
        const date = new Date()
        blockchain.blocks.push({id:i, timestamp: date)
    }
    return blockchain
}

export default blockchainData