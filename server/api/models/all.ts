const blockchainData = () => {
    let blockchain = []

    for (let k = 0; k < 5; k++) {
        blockchain.push({ id: k, name: `Main blockhain ${k}`, blocks: [] })
        for (let i = 0; i < 5 + k; i++) {
            const date = new Date()
            const dateTime = {
                date: date
                    .toString()
                    .split('')
                    .splice(0, 15)
                    .join(''),
                time: date
                    .toString()
                    .split('')
                    .splice(16, 8)
                    .join(''),
            }
            blockchain[k].blocks.push({ id: i, timestamp: dateTime })
        }
    }
    return blockchain
}

export default blockchainData
