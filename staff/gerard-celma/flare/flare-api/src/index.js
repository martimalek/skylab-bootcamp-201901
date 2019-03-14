require('dotenv').config()

const { mongoose } = require('datify')
const express = require('express')
const tokenHelper = require('./token-helper')
const cors = require('cors')
const package = require('../package.json')
const router = require('./routes')


const { env: { MONGODB_URI: DB_URL, PORT, JWT_SECRET }, argv: [, , port = PORT || 8080] } = process

mongoose.connect(DB_URL, { useNewUrlParser: true })
    .then(() => {
        tokenHelper.jwtSecret = JWT_SECRET

        const app = express()
        
        app.use(cors())

        app.use('/api', router)

        app.listen(port, () => console.log(`${package.name} ${package.version} running on port ${port}`))
    })
    .catch(console.error)

process.on('SIGINT', () => {
    mongoose.disconnect()
        .then(() => {
            console.log(`\n ${package.name} stopped`)

            process.exit(0)
        })
})